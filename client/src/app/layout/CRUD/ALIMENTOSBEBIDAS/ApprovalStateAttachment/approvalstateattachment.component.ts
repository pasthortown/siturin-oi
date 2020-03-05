import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { ApprovalStateAttachmentService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/approvalstateattachment.service';
import { ApprovalStateAttachment } from './../../../../models/ALIMENTOSBEBIDAS/ApprovalStateAttachment';
import { ApprovalStateService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/approvalstate.service';
import { ApprovalState } from './../../../../models/ALIMENTOSBEBIDAS/ApprovalState';


@Component({
   selector: 'app-approvalstateattachment',
   templateUrl: './approvalstateattachment.component.html',
   styleUrls: ['./approvalstateattachment.component.scss']
})
export class ApprovalStateAttachmentComponent implements OnInit {
   approval_state_attachments: ApprovalStateAttachment[] = [];
   approval_state_attachmentSelected: ApprovalStateAttachment = new ApprovalStateAttachment();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   approval_states: ApprovalState[] = [];
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private approval_stateDataService: ApprovalStateService,
               private approval_state_attachmentDataService: ApprovalStateAttachmentService) {}

   ngOnInit() {
      this.goToPage(1);
      this.getApprovalState();
   }

   CodeFileApprovalStateAttachment(event) {
      const reader = new FileReader();
      if (event.target.files && event.target.files.length > 0) {
         const file = event.target.files[0];
         reader.readAsDataURL(file);
         reader.onload = () => {
            this.approval_state_attachmentSelected.approval_state_attachment_file_name = file.name;
            this.approval_state_attachmentSelected.approval_state_attachment_file_type = file.type;
            this.approval_state_attachmentSelected.approval_state_attachment_file = reader.result.toString().split(',')[1];
         };
      }
   }

   selectApprovalStateAttachment(approval_state_attachment: ApprovalStateAttachment) {
      this.approval_state_attachmentSelected = approval_state_attachment;
   }

   getApprovalState() {
      this.approval_states = [];
      this.approval_stateDataService.get().then( r => {
         this.approval_states = r as ApprovalState[];
      }).catch( e => console.log(e) );
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getApprovalStateAttachments();
   }

   getApprovalStateAttachments() {
      this.approval_state_attachments = [];
      this.approval_state_attachmentSelected = new ApprovalStateAttachment();
      this.approval_state_attachmentSelected.approval_state_id = 0;
      this.approval_state_attachmentDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.approval_state_attachments = r.data as ApprovalStateAttachment[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newApprovalStateAttachment(content) {
      this.approval_state_attachmentSelected = new ApprovalStateAttachment();
      this.approval_state_attachmentSelected.approval_state_id = 0;
      this.openDialog(content);
   }

   editApprovalStateAttachment(content) {
      if (typeof this.approval_state_attachmentSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteApprovalStateAttachment() {
      if (typeof this.approval_state_attachmentSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.approval_state_attachmentDataService.delete(this.approval_state_attachmentSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getApprovalStateAttachments();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.approval_state_attachmentDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_ApprovalStateAttachments.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.approval_state_attachmentDataService.get().then( r => {
         const backupData = r as ApprovalStateAttachment[];
         let output = 'id;approval_state_attachment_file_type;approval_state_attachment_file_name;approval_state_attachment_file;approval_state_id\n';
         backupData.forEach(element => {
            output += element.id; + element.approval_state_attachment_file_type + ';' + element.approval_state_attachment_file_name + ';' + element.approval_state_attachment_file + ';' + element.approval_state_id + '\n';
         });
         const blob = new Blob([output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_ApprovalStateAttachments.csv');
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
            this.approval_state_attachmentDataService.masiveLoad(newData).then( r => {
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
            if (typeof this.approval_state_attachmentSelected.id === 'undefined') {
               this.approval_state_attachmentDataService.post(this.approval_state_attachmentSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getApprovalStateAttachments();
               }).catch( e => console.log(e) );
            } else {
               this.approval_state_attachmentDataService.put(this.approval_state_attachmentSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getApprovalStateAttachments();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}