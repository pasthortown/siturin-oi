import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { PersonRepresentativeService } from './../../../../services/CRUD/BASE/personrepresentative.service';
import { PersonRepresentative } from './../../../../models/BASE/PersonRepresentative';

@Component({
   selector: 'app-personrepresentative',
   templateUrl: './personrepresentative.component.html',
   styleUrls: ['./personrepresentative.component.scss']
})
export class PersonRepresentativeComponent implements OnInit {
   person_representatives: PersonRepresentative[] = [];
   person_representativeSelected: PersonRepresentative = new PersonRepresentative();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private person_representativeDataService: PersonRepresentativeService) {}

   ngOnInit() {
      this.goToPage(1);
   }

   selectPersonRepresentative(person_representative: PersonRepresentative) {
      this.person_representativeSelected = person_representative;
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getPersonRepresentatives();
   }

   getPersonRepresentatives() {
      this.person_representatives = [];
      this.person_representativeSelected = new PersonRepresentative();
      this.person_representativeDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.person_representatives = r.data as PersonRepresentative[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newPersonRepresentative(content) {
      this.person_representativeSelected = new PersonRepresentative();
      this.openDialog(content);
   }

   editPersonRepresentative(content) {
      if (typeof this.person_representativeSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deletePersonRepresentative() {
      if (typeof this.person_representativeSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.person_representativeDataService.delete(this.person_representativeSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getPersonRepresentatives();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.person_representativeDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_PersonRepresentatives.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.person_representativeDataService.get().then( r => {
         const backupData = r as PersonRepresentative[];
         let output = 'id;identification\n';
         backupData.forEach(element => {
            output += element.id + ';' + element.identification + '\n';
         });
         const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_PersonRepresentatives.csv');
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
            this.person_representativeDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.person_representativeSelected.id === 'undefined') {
               this.person_representativeDataService.post(this.person_representativeSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getPersonRepresentatives();
               }).catch( e => console.log(e) );
            } else {
               this.person_representativeDataService.put(this.person_representativeSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getPersonRepresentatives();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}