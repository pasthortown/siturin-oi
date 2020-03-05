import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { FloorAuthorizationCertificateService } from './../../../../services/CRUD/BASE/floorauthorizationcertificate.service';
import { FloorAuthorizationCertificate } from './../../../../models/BASE/FloorAuthorizationCertificate';

@Component({
   selector: 'app-floorauthorizationcertificate',
   templateUrl: './floorauthorizationcertificate.component.html',
   styleUrls: ['./floorauthorizationcertificate.component.scss']
})
export class FloorAuthorizationCertificateComponent implements OnInit {
   floor_authorization_certificates: FloorAuthorizationCertificate[] = [];
   floor_authorization_certificateSelected: FloorAuthorizationCertificate = new FloorAuthorizationCertificate();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private floor_authorization_certificateDataService: FloorAuthorizationCertificateService) {}

   ngOnInit() {
      this.goToPage(1);
   }

   CodeFileFloorAuthorizationCertificate(event) {
      const reader = new FileReader();
      if (event.target.files && event.target.files.length > 0) {
         const file = event.target.files[0];
         reader.readAsDataURL(file);
         reader.onload = () => {
            this.floor_authorization_certificateSelected.floor_authorization_certificate_file_name = file.name;
            this.floor_authorization_certificateSelected.floor_authorization_certificate_file_type = file.type;
            this.floor_authorization_certificateSelected.floor_authorization_certificate_file = reader.result.toString().split(',')[1];
         };
      }
   }

   selectFloorAuthorizationCertificate(floor_authorization_certificate: FloorAuthorizationCertificate) {
      this.floor_authorization_certificateSelected = floor_authorization_certificate;
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getFloorAuthorizationCertificates();
   }

   getFloorAuthorizationCertificates() {
      this.floor_authorization_certificates = [];
      this.floor_authorization_certificateSelected = new FloorAuthorizationCertificate();
      this.floor_authorization_certificateDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.floor_authorization_certificates = r.data as FloorAuthorizationCertificate[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newFloorAuthorizationCertificate(content) {
      this.floor_authorization_certificateSelected = new FloorAuthorizationCertificate();
      this.openDialog(content);
   }

   editFloorAuthorizationCertificate(content) {
      if (typeof this.floor_authorization_certificateSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteFloorAuthorizationCertificate() {
      if (typeof this.floor_authorization_certificateSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.floor_authorization_certificateDataService.delete(this.floor_authorization_certificateSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getFloorAuthorizationCertificates();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.floor_authorization_certificateDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_FloorAuthorizationCertificates.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.floor_authorization_certificateDataService.get().then( r => {
         const backupData = r as FloorAuthorizationCertificate[];
         let output = 'id;floor_authorization_certificate_file_type;floor_authorization_certificate_file_name;floor_authorization_certificate_file;register_id\n';
         backupData.forEach(element => {
            output += element.id + ';' + element.floor_authorization_certificate_file_type + ';' + element.floor_authorization_certificate_file_name + ';' + element.floor_authorization_certificate_file + ';' + element.register_id + '\n';
         });
         const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_FloorAuthorizationCertificates.csv');
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
            this.floor_authorization_certificateDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   downloadFile(file: string, type: string, name: string) {
      const byteCharacters = atob(file);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
         byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: type});
      saveAs(blob, name);
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true , size: 'lg' }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.floor_authorization_certificateSelected.id === 'undefined') {
               this.floor_authorization_certificateDataService.post(this.floor_authorization_certificateSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getFloorAuthorizationCertificates();
               }).catch( e => console.log(e) );
            } else {
               this.floor_authorization_certificateDataService.put(this.floor_authorization_certificateSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getFloorAuthorizationCertificates();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}