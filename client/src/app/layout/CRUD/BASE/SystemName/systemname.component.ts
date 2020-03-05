import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { SystemNameService } from './../../../../services/CRUD/BASE/systemname.service';
import { SystemName } from './../../../../models/BASE/SystemName';

@Component({
   selector: 'app-systemname',
   templateUrl: './systemname.component.html',
   styleUrls: ['./systemname.component.scss']
})
export class SystemNameComponent implements OnInit {
   system_names: SystemName[] = [];
   system_nameSelected: SystemName = new SystemName();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private system_nameDataService: SystemNameService) {}

   ngOnInit() {
      this.goToPage(1);
   }

   selectSystemName(system_name: SystemName) {
      this.system_nameSelected = system_name;
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getSystemNames();
   }

   getSystemNames() {
      this.system_names = [];
      this.system_nameSelected = new SystemName();
      this.system_nameDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.system_names = r.data as SystemName[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newSystemName(content) {
      this.system_nameSelected = new SystemName();
      this.openDialog(content);
   }

   editSystemName(content) {
      if (typeof this.system_nameSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteSystemName() {
      if (typeof this.system_nameSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.system_nameDataService.delete(this.system_nameSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getSystemNames();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.system_nameDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_SystemNames.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.system_nameDataService.get().then( r => {
         const backupData = r as SystemName[];
         let output = 'id;name\n';
         backupData.forEach(element => {
            output += element.id + ';' + element.name + '\n';
         });
         const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_SystemNames.csv');
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
            this.system_nameDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.system_nameSelected.id === 'undefined') {
               this.system_nameDataService.post(this.system_nameSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getSystemNames();
               }).catch( e => console.log(e) );
            } else {
               this.system_nameDataService.put(this.system_nameSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getSystemNames();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}