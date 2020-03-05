import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { AgreementService } from './../../../../services/CRUD/BASE/agreement.service';
import { Agreement } from './../../../../models/BASE/Agreement';

@Component({
   selector: 'app-agreement',
   templateUrl: './agreement.component.html',
   styleUrls: ['./agreement.component.scss']
})
export class AgreementComponent implements OnInit {
   agreements: Agreement[] = [];
   agreementSelected: Agreement = new Agreement();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private agreementDataService: AgreementService) {}

   ngOnInit() {
      this.goToPage(1);
   }

   selectAgreement(agreement: Agreement) {
      this.agreementSelected = agreement;
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getAgreements();
   }

   getAgreements() {
      this.agreements = [];
      this.agreementSelected = new Agreement();
      this.agreementDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.agreements = r.data as Agreement[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newAgreement(content) {
      this.agreementSelected = new Agreement();
      this.openDialog(content);
   }

   editAgreement(content) {
      if (typeof this.agreementSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteAgreement() {
      if (typeof this.agreementSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.agreementDataService.delete(this.agreementSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getAgreements();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.agreementDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_Agreements.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.agreementDataService.get().then( r => {
         const backupData = r as Agreement[];
         let output = 'id;title;content\n';
         backupData.forEach(element => {
            output += element.id + ';' + element.title + ';' + element.content + '\n';
         });
         const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_Agreements.csv');
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
            this.agreementDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true , size: 'lg' }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.agreementSelected.id === 'undefined') {
               this.agreementDataService.post(this.agreementSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getAgreements();
               }).catch( e => console.log(e) );
            } else {
               this.agreementDataService.put(this.agreementSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getAgreements();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}