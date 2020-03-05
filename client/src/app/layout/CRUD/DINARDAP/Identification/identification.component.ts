import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { IdentificationService } from './../../../../services/CRUD/DINARDAP/identification.service';
import { Identification } from './../../../../models/DINARDAP/Identification';

@Component({
   selector: 'app-identification',
   templateUrl: './identification.component.html',
   styleUrls: ['./identification.component.scss']
})
export class IdentificationComponent implements OnInit {
   identifications: Identification[] = [];
   identificationSelected: Identification = new Identification();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private identificationDataService: IdentificationService) {}

   ngOnInit() {
      this.goToPage(1);
   }

   selectIdentification(identification: Identification) {
      this.identificationSelected = identification;
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getIdentifications();
   }

   getIdentifications() {
      this.identifications = [];
      this.identificationSelected = new Identification();
      this.identificationDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.identifications = r.data as Identification[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newIdentification(content) {
      this.identificationSelected = new Identification();
      this.openDialog(content);
   }

   editIdentification(content) {
      if (typeof this.identificationSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteIdentification() {
      if (typeof this.identificationSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.identificationDataService.delete(this.identificationSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getIdentifications();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.identificationDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_Identifications.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.identificationDataService.get().then( r => {
         const backupData = r as Identification[];
         let output = 'id;number;data;date\n';
         backupData.forEach(element => {
            output += element.id + ';' + element.number + ';' + element.data + ';' + element.date + '\n';
         });
         const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_Identifications.csv');
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
            this.identificationDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true , size: 'lg' }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.identificationSelected.id === 'undefined') {
               this.identificationDataService.post(this.identificationSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getIdentifications();
               }).catch( e => console.log(e) );
            } else {
               this.identificationDataService.put(this.identificationSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getIdentifications();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}