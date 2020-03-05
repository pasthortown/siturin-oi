import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { PayAttachmentService } from './../../../../services/CRUD/FINANCIERO/payattachment.service';
import { PayAttachment } from './../../../../models/FINANCIERO/PayAttachment';
import { PayService } from './../../../../services/CRUD/FINANCIERO/pay.service';
import { Pay } from './../../../../models/FINANCIERO/Pay';


@Component({
   selector: 'app-payattachment',
   templateUrl: './payattachment.component.html',
   styleUrls: ['./payattachment.component.scss']
})
export class PayAttachmentComponent implements OnInit {
   pay_attachments: PayAttachment[] = [];
   pay_attachmentSelected: PayAttachment = new PayAttachment();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   pays: Pay[] = [];
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private payDataService: PayService,
               private pay_attachmentDataService: PayAttachmentService) {}

   ngOnInit() {
      this.goToPage(1);
      this.getPay();
   }

   CodeFilePayAttachment(event) {
      const reader = new FileReader();
      if (event.target.files && event.target.files.length > 0) {
         const file = event.target.files[0];
         reader.readAsDataURL(file);
         reader.onload = () => {
            this.pay_attachmentSelected.pay_attachment_file_name = file.name;
            this.pay_attachmentSelected.pay_attachment_file_type = file.type;
            this.pay_attachmentSelected.pay_attachment_file = reader.result.toString().split(',')[1];
         };
      }
   }

   selectPayAttachment(pay_attachment: PayAttachment) {
      this.pay_attachmentSelected = pay_attachment;
   }

   getPay() {
      this.pays = [];
      this.payDataService.get().then( r => {
         this.pays = r as Pay[];
      }).catch( e => console.log(e) );
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getPayAttachments();
   }

   getPayAttachments() {
      this.pay_attachments = [];
      this.pay_attachmentSelected = new PayAttachment();
      this.pay_attachmentSelected.pay_id = 0;
      this.pay_attachmentDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.pay_attachments = r.data as PayAttachment[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newPayAttachment(content) {
      this.pay_attachmentSelected = new PayAttachment();
      this.pay_attachmentSelected.pay_id = 0;
      this.openDialog(content);
   }

   editPayAttachment(content) {
      if (typeof this.pay_attachmentSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deletePayAttachment() {
      if (typeof this.pay_attachmentSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.pay_attachmentDataService.delete(this.pay_attachmentSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getPayAttachments();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.pay_attachmentDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_PayAttachments.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.pay_attachmentDataService.get().then( r => {
         const backupData = r as PayAttachment[];
         let output = 'id;pay_attachment_file_type;pay_attachment_file_name;pay_attachment_file;pay_id\n';
         backupData.forEach(element => {
            output += element.id + ';' + element.pay_attachment_file_type + ';' + element.pay_attachment_file_name + ';' + element.pay_attachment_file + ';' + element.pay_id + '\n';
         });
         const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_PayAttachments.csv');
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
            this.pay_attachmentDataService.masiveLoad(newData).then( r => {
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
            if (typeof this.pay_attachmentSelected.id === 'undefined') {
               this.pay_attachmentDataService.post(this.pay_attachmentSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getPayAttachments();
               }).catch( e => console.log(e) );
            } else {
               this.pay_attachmentDataService.put(this.pay_attachmentSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getPayAttachments();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}