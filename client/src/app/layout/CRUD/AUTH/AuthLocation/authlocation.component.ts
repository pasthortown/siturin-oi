import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { AuthLocation } from 'src/app/models/AUTH/AuthLocation';
import { AuthLocationService } from 'src/app/services/CRUD/AUTH/authlocation.service';

@Component({
   selector: 'app-authlocation',
   templateUrl: './authlocation.component.html',
   styleUrls: ['./authlocation.component.scss']
})
export class AuthLocationComponent implements OnInit {
   auth_locations: AuthLocation[] = [];
   auth_locationSelected: AuthLocation = new AuthLocation();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private auth_locationDataService: AuthLocationService) {}

   ngOnInit() {
      this.goToPage(1);
   }

   selectAuthLocation(auth_location: AuthLocation) {
      this.auth_locationSelected = auth_location;
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getAuthLocations();
   }

   getAuthLocations() {
      this.auth_locations = [];
      this.auth_locationSelected = new AuthLocation();
      this.auth_locationDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.auth_locations = r.data as AuthLocation[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newAuthLocation(content) {
      this.auth_locationSelected = new AuthLocation();
      this.openDialog(content);
   }

   editAuthLocation(content) {
      if (typeof this.auth_locationSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteAuthLocation() {
      if (typeof this.auth_locationSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.auth_locationDataService.delete(this.auth_locationSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getAuthLocations();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.auth_locationDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_AuthLocations.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.auth_locationDataService.get().then( r => {
         const backupData = r as AuthLocation[];
         let output = 'id;id_ubication;id_user\n';
         backupData.forEach(element => {
            output += element.id; + element.id_ubication + ';' + element.id_user + '\n';
         });
         const blob = new Blob([output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_AuthLocations.csv');
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
            this.auth_locationDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.auth_locationSelected.id === 'undefined' || this.auth_locationSelected.id == 0) {
               this.auth_locationDataService.post(this.auth_locationSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getAuthLocations();
               }).catch( e => console.log(e) );
            } else {
               this.auth_locationDataService.put(this.auth_locationSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getAuthLocations();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}