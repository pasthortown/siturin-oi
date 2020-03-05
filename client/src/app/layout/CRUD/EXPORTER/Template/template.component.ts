import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { TemplateService } from './../../../../services/CRUD/EXPORTER/template.service';
import { Template } from './../../../../models/EXPORTER/Template';
import { ExporterService } from 'src/app/services/negocio/exporter.service';

@Component({
   selector: 'app-template',
   templateUrl: './template.component.html',
   styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
   templates: Template[] = [];
   templateSelected: Template = new Template();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private exporterDataService: ExporterService,
               private templateDataService: TemplateService) {}

   ngOnInit() {
      this.goToPage(1);
   }

   selecttemplate(template: Template) {
      this.templateSelected = template;
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.gettemplates();
   }

   gettemplates() {
      this.templates = [];
      this.templateSelected = new Template();
      this.templateDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.templates = r.data as Template[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newtemplate(content) {
      this.templateSelected = new Template();
      this.openDialog(content);
   }

   edittemplate(content) {
      if (typeof this.templateSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deletetemplate() {
      if (typeof this.templateSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.templateDataService.delete(this.templateSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.gettemplates();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.templateDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_templates.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.templateDataService.get().then( r => {
         const backupData = r as Template[];
         let output = 'id;body\n';
         backupData.forEach(element => {
            output += element.id + ';' + element.body + '\n';
         });
         const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_templates.csv');
      }).catch( e => console.log(e) );
   }

   decodeUploadFile(event) {
      const reader = new FileReader();
      if (event.target.files && event.target.files.length > 0) {
         const file = event.target.files[0];
         reader.readAsDataURL(file);
         reader.onload = () => {
            const fileBytes = reader.result.toString().split(',')[1];
            const newData = JSON.parse(decodeURIComponent(escape(atob(fileBytes)))) as any[];
            this.templateDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true , size: 'lg' }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.templateSelected.id === 'undefined' || this.templateSelected.id === 0) {
               this.templateDataService.post(this.templateSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.gettemplates();
               }).catch( e => console.log(e) );
            } else {
               this.templateDataService.put(this.templateSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.gettemplates();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }

   descargarPDF(html: string, title: string, orientation: string) {
      const params = [{ciudad: 'Quito'},
         {fecha: new Date().toLocaleString()},
         {codigo: '1'},
         {nombre_comercial: 'LSYSTEMS'},
         {propietario: 'Luis Alfonso Salazar Vaca'},
         {representante_legal: 'Luis Alfonso Salazar Vaca'},
         {direccion_establecimiento: 'Los Robles E14-16 y Cardos'},
         {Registro: '1'}];
      this.exporterDataService.pdf_file(html, title, orientation, true, this.exporterDataService.getPDFQRdata(params), params).then( r => {
         const byteCharacters = atob(r);
         const byteNumbers = new Array(byteCharacters.length);
         for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
         }
         const byteArray = new Uint8Array(byteNumbers);
         const blob = new Blob([byteArray], { type: 'application/pdf'});
         saveAs(blob, title + '.pdf');
      }).catch( e => { console.log(e); });
   }

   getPDFdata(html: string) {
      const vars = html.split('##');
      let data = 'const params = [';
      for( let i = 1; i < vars.length -1 ; i = i + 2) {
         data += '{' + vars[i] + ': ' + vars[i] + '},\n';
      }
      data = data.substr(0, data.length -2);
      data += '];';
      return data;
   }
}