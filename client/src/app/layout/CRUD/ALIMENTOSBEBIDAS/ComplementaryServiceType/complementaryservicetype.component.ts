import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { ComplementaryServiceTypeService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/complementaryservicetype.service';
import { ComplementaryServiceType } from './../../../../models/ALIMENTOSBEBIDAS/ComplementaryServiceType';

@Component({
   selector: 'app-complementaryservicetype',
   templateUrl: './complementaryservicetype.component.html',
   styleUrls: ['./complementaryservicetype.component.scss']
})
export class ComplementaryServiceTypeComponent implements OnInit {
   complementary_service_types: ComplementaryServiceType[] = [];
   complementary_service_typeSelected: ComplementaryServiceType = new ComplementaryServiceType();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private complementary_service_typeDataService: ComplementaryServiceTypeService) {}

   ngOnInit() {
      this.goToPage(1);
   }

   selectComplementaryServiceType(complementary_service_type: ComplementaryServiceType) {
      this.complementary_service_typeSelected = complementary_service_type;
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getComplementaryServiceTypes();
   }

   getComplementaryServiceTypes() {
      this.complementary_service_types = [];
      this.complementary_service_typeSelected = new ComplementaryServiceType();
      this.complementary_service_typeDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.complementary_service_types = r.data as ComplementaryServiceType[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newComplementaryServiceType(content) {
      this.complementary_service_typeSelected = new ComplementaryServiceType();
      this.openDialog(content);
   }

   editComplementaryServiceType(content) {
      if (typeof this.complementary_service_typeSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteComplementaryServiceType() {
      if (typeof this.complementary_service_typeSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.complementary_service_typeDataService.delete(this.complementary_service_typeSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getComplementaryServiceTypes();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.complementary_service_typeDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_ComplementaryServiceTypes.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.complementary_service_typeDataService.get().then( r => {
         const backupData = r as ComplementaryServiceType[];
         let output = 'id;name;code;father_code;description\n';
         backupData.forEach(element => {
            output += element.id; + element.name + ';' + element.code + ';' + element.father_code + ';' + element.description + '\n';
         });
         const blob = new Blob([output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_ComplementaryServiceTypes.csv');
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
            this.complementary_service_typeDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true , size: 'lg' }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.complementary_service_typeSelected.id === 'undefined') {
               this.complementary_service_typeDataService.post(this.complementary_service_typeSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getComplementaryServiceTypes();
               }).catch( e => console.log(e) );
            } else {
               this.complementary_service_typeDataService.put(this.complementary_service_typeSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getComplementaryServiceTypes();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}