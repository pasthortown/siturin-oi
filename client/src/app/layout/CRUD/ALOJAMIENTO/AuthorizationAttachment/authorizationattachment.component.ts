import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { AuthorizationAttachmentService } from './../../../../services/CRUD/ALOJAMIENTO/authorizationattachment.service';
import { AuthorizationAttachment } from './../../../../models/ALOJAMIENTO/AuthorizationAttachment';
import { RegisterService } from './../../../../services/CRUD/ALOJAMIENTO/register.service';
import { Register } from './../../../../models/ALOJAMIENTO/Register';


@Component({
   selector: 'app-authorizationattachment',
   templateUrl: './authorizationattachment.component.html',
   styleUrls: ['./authorizationattachment.component.scss']
})
export class AuthorizationAttachmentComponent implements OnInit {
   authorization_attachments: AuthorizationAttachment[] = [];
   authorization_attachmentSelected: AuthorizationAttachment = new AuthorizationAttachment();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   registers: Register[] = [];
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private registerDataService: RegisterService,
               private authorization_attachmentDataService: AuthorizationAttachmentService) {}

   ngOnInit() {
      this.goToPage(1);
      this.getRegister();
   }

   CodeFileAuthorizationAttachment(event) {
      const reader = new FileReader();
      if (event.target.files && event.target.files.length > 0) {
         const file = event.target.files[0];
         reader.readAsDataURL(file);
         reader.onload = () => {
            this.authorization_attachmentSelected.authorization_attachment_file_name = file.name;
            this.authorization_attachmentSelected.authorization_attachment_file_type = file.type;
            this.authorization_attachmentSelected.authorization_attachment_file = reader.result.toString().split(',')[1];
         };
      }
   }

   selectAuthorizationAttachment(authorization_attachment: AuthorizationAttachment) {
      this.authorization_attachmentSelected = authorization_attachment;
   }

   getRegister() {
      this.registers = [];
      this.registerDataService.get().then( r => {
         this.registers = r as Register[];
      }).catch( e => console.log(e) );
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getAuthorizationAttachments();
   }

   getAuthorizationAttachments() {
      this.authorization_attachments = [];
      this.authorization_attachmentSelected = new AuthorizationAttachment();
      this.authorization_attachmentSelected.register_id = 0;
      this.authorization_attachmentDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.authorization_attachments = r.data as AuthorizationAttachment[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newAuthorizationAttachment(content) {
      this.authorization_attachmentSelected = new AuthorizationAttachment();
      this.authorization_attachmentSelected.register_id = 0;
      this.openDialog(content);
   }

   editAuthorizationAttachment(content) {
      if (typeof this.authorization_attachmentSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteAuthorizationAttachment() {
      if (typeof this.authorization_attachmentSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.authorization_attachmentDataService.delete(this.authorization_attachmentSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getAuthorizationAttachments();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.authorization_attachmentDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_AuthorizationAttachments.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.authorization_attachmentDataService.get().then( r => {
         const backupData = r as AuthorizationAttachment[];
         let output = 'id;authorization_attachment_file_type;authorization_attachment_file_name;authorization_attachment_file;register_id\n';
         backupData.forEach(element => {
            output += element.id; + element.authorization_attachment_file_type + ';' + element.authorization_attachment_file_name + ';' + element.authorization_attachment_file + ';' + element.register_id + '\n';
         });
         const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_AuthorizationAttachments.csv');
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
            this.authorization_attachmentDataService.masiveLoad(newData).then( r => {
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
            if (typeof this.authorization_attachmentSelected.id === 'undefined') {
               this.authorization_attachmentDataService.post(this.authorization_attachmentSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getAuthorizationAttachments();
               }).catch( e => console.log(e) );
            } else {
               this.authorization_attachmentDataService.put(this.authorization_attachmentSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getAuthorizationAttachments();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}