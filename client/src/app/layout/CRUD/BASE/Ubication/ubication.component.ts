import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { UbicationService } from './../../../../services/CRUD/BASE/ubication.service';
import { Ubication } from './../../../../models/BASE/Ubication';

@Component({
   selector: 'app-ubication',
   templateUrl: './ubication.component.html',
   styleUrls: ['./ubication.component.scss']
})
export class UbicationComponent implements OnInit {
   ubications: Ubication[] = [];
   ubicationSelected: Ubication = new Ubication();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private ubicationDataService: UbicationService) {}

   ngOnInit() {
      this.goToPage(1);
   }

   selectUbication(ubication: Ubication) {
      this.ubicationSelected = ubication;
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getUbications();
   }

   gmap_referenceEvent(event) {
      this.ubicationSelected.gmap_reference_latitude = event.coords.lat;
      this.ubicationSelected.gmap_reference_longitude = event.coords.lng;
   }

   getUbications() {
      this.ubications = [];
      this.ubicationSelected = new Ubication();
      this.ubicationDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.ubications = r.data as Ubication[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newUbication(content) {
      this.ubicationSelected = new Ubication();
      this.openDialog(content);
   }

   editUbication(content) {
      if (typeof this.ubicationSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteUbication() {
      if (typeof this.ubicationSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.ubicationDataService.delete(this.ubicationSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getUbications();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.ubicationDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_Ubications.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.ubicationDataService.get().then( r => {
         const backupData = r as Ubication[];
         let output = 'id;name;code;father_code;gmap_reference_latitude;gmap_reference_longitude\n';
         backupData.forEach(element => {
            output += element.id + ';' + element.name + ';' + element.code + ';' + element.father_code + ';' + element.gmap_reference_latitude + ';' + element.gmap_reference_longitude + '\n';
         });
         const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_Ubications.csv');
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
            this.ubicationDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.ubicationSelected.id === 'undefined') {
               this.ubicationDataService.post(this.ubicationSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getUbications();
               }).catch( e => console.log(e) );
            } else {
               this.ubicationDataService.put(this.ubicationSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getUbications();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}