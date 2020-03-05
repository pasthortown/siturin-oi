import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { PayMassFileAttachmentService } from './../../../../services/CRUD/FINANCIERO/paymassfileattachment.service';
import { PayMassFileAttachment } from './../../../../models/FINANCIERO/PayMassFileAttachment';

@Component({
   selector: 'app-paymassfileattachment',
   templateUrl: './paymassfileattachment.component.html',
   styleUrls: ['./paymassfileattachment.component.scss']
})
export class PayMassFileAttachmentComponent implements OnInit {
   pay_mass_file_attachments: PayMassFileAttachment[] = [];
   pay_mass_file_attachmentSelected: PayMassFileAttachment = new PayMassFileAttachment();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private pay_mass_file_attachmentDataService: PayMassFileAttachmentService) {}

   ngOnInit() {
      this.goToPage(1);
   }

   CodeFilePayMassFileAttachment(event) {
      const reader = new FileReader();
      if (event.target.files && event.target.files.length > 0) {
         const file = event.target.files[0];
         reader.readAsDataURL(file);
         reader.onload = () => {
            this.pay_mass_file_attachmentSelected.pay_mass_file_attachment_file_name = file.name;
            this.pay_mass_file_attachmentSelected.pay_mass_file_attachment_file_type = file.type;
            this.pay_mass_file_attachmentSelected.pay_mass_file_attachment_file = reader.result.toString().split(',')[1];
         };
      }
   }

   selectPayMassFileAttachment(pay_mass_file_attachment: PayMassFileAttachment) {
      this.pay_mass_file_attachmentSelected = pay_mass_file_attachment;
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getPayMassFileAttachments();
   }

   getPayMassFileAttachments() {
      this.pay_mass_file_attachments = [];
      this.pay_mass_file_attachmentSelected = new PayMassFileAttachment();
      this.pay_mass_file_attachmentDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.pay_mass_file_attachments = r.data as PayMassFileAttachment[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newPayMassFileAttachment(content) {
      this.pay_mass_file_attachmentSelected = new PayMassFileAttachment();
      this.openDialog(content);
   }

   editPayMassFileAttachment(content) {
      if (typeof this.pay_mass_file_attachmentSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deletePayMassFileAttachment() {
      if (typeof this.pay_mass_file_attachmentSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.pay_mass_file_attachmentDataService.delete(this.pay_mass_file_attachmentSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getPayMassFileAttachments();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.pay_mass_file_attachmentDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_PayMassFileAttachments.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.pay_mass_file_attachmentDataService.get().then( r => {
         const backupData = r as PayMassFileAttachment[];
         let output = 'id;pay_mass_file_attachment_file_type;pay_mass_file_attachment_file_name;pay_mass_file_attachment_file;date\n';
         backupData.forEach(element => {
            output += element.id + ';' + element.pay_mass_file_attachment_file_type + ';' + element.pay_mass_file_attachment_file_name + ';' + element.pay_mass_file_attachment_file + ';' + element.date + '\n';
         });
         const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_PayMassFileAttachments.csv');
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
            this.pay_mass_file_attachmentDataService.masiveLoad(newData).then( r => {
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
            if (typeof this.pay_mass_file_attachmentSelected.id === 'undefined') {
               this.pay_mass_file_attachmentDataService.post(this.pay_mass_file_attachmentSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getPayMassFileAttachments();
               }).catch( e => console.log(e) );
            } else {
               this.pay_mass_file_attachmentDataService.put(this.pay_mass_file_attachmentSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getPayMassFileAttachments();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}