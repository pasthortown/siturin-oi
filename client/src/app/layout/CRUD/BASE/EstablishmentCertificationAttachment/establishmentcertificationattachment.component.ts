import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { EstablishmentCertificationAttachmentService } from './../../../../services/CRUD/BASE/establishmentcertificationattachment.service';
import { EstablishmentCertificationAttachment } from './../../../../models/BASE/EstablishmentCertificationAttachment';

@Component({
   selector: 'app-establishmentcertificationattachment',
   templateUrl: './establishmentcertificationattachment.component.html',
   styleUrls: ['./establishmentcertificationattachment.component.scss']
})
export class EstablishmentCertificationAttachmentComponent implements OnInit {
   establishment_certification_attachments: EstablishmentCertificationAttachment[] = [];
   establishment_certification_attachmentSelected: EstablishmentCertificationAttachment = new EstablishmentCertificationAttachment();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private establishment_certification_attachmentDataService: EstablishmentCertificationAttachmentService) {}

   ngOnInit() {
      this.goToPage(1);
   }

   CodeFileEstablishmentCertificationAttachment(event) {
      const reader = new FileReader();
      if (event.target.files && event.target.files.length > 0) {
         const file = event.target.files[0];
         reader.readAsDataURL(file);
         reader.onload = () => {
            this.establishment_certification_attachmentSelected.establishment_certification_attachment_file_name = file.name;
            this.establishment_certification_attachmentSelected.establishment_certification_attachment_file_type = file.type;
            this.establishment_certification_attachmentSelected.establishment_certification_attachment_file = reader.result.toString().split(',')[1];
         };
      }
   }

   selectEstablishmentCertificationAttachment(establishment_certification_attachment: EstablishmentCertificationAttachment) {
      this.establishment_certification_attachmentSelected = establishment_certification_attachment;
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getEstablishmentCertificationAttachments();
   }

   getEstablishmentCertificationAttachments() {
      this.establishment_certification_attachments = [];
      this.establishment_certification_attachmentSelected = new EstablishmentCertificationAttachment();
      this.establishment_certification_attachmentDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.establishment_certification_attachments = r.data as EstablishmentCertificationAttachment[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newEstablishmentCertificationAttachment(content) {
      this.establishment_certification_attachmentSelected = new EstablishmentCertificationAttachment();
      this.openDialog(content);
   }

   editEstablishmentCertificationAttachment(content) {
      if (typeof this.establishment_certification_attachmentSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteEstablishmentCertificationAttachment() {
      if (typeof this.establishment_certification_attachmentSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.establishment_certification_attachmentDataService.delete(this.establishment_certification_attachmentSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getEstablishmentCertificationAttachments();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.establishment_certification_attachmentDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_EstablishmentCertificationAttachments.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.establishment_certification_attachmentDataService.get().then( r => {
         const backupData = r as EstablishmentCertificationAttachment[];
         let output = 'id;establishment_certification_attachment_file_type;establishment_certification_attachment_file_name;establishment_certification_attachment_file\n';
         backupData.forEach(element => {
            output += element.id + ';' + element.establishment_certification_attachment_file_type + ';' + element.establishment_certification_attachment_file_name + ';' + element.establishment_certification_attachment_file + '\n';
         });
         const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_EstablishmentCertificationAttachments.csv');
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
            this.establishment_certification_attachmentDataService.masiveLoad(newData).then( r => {
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
            if (typeof this.establishment_certification_attachmentSelected.id === 'undefined') {
               this.establishment_certification_attachmentDataService.post(this.establishment_certification_attachmentSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getEstablishmentCertificationAttachments();
               }).catch( e => console.log(e) );
            } else {
               this.establishment_certification_attachmentDataService.put(this.establishment_certification_attachmentSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getEstablishmentCertificationAttachments();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}