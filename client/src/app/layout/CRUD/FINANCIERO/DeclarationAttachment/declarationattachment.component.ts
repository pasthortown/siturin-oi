import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { DeclarationAttachmentService } from './../../../../services/CRUD/FINANCIERO/declarationattachment.service';
import { DeclarationAttachment } from './../../../../models/FINANCIERO/DeclarationAttachment';
import { DeclarationService } from './../../../../services/CRUD/FINANCIERO/declaration.service';
import { Declaration } from './../../../../models/FINANCIERO/Declaration';


@Component({
   selector: 'app-declarationattachment',
   templateUrl: './declarationattachment.component.html',
   styleUrls: ['./declarationattachment.component.scss']
})
export class DeclarationAttachmentComponent implements OnInit {
   declaration_attachments: DeclarationAttachment[] = [];
   declaration_attachmentSelected: DeclarationAttachment = new DeclarationAttachment();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   declarations: Declaration[] = [];
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private declarationDataService: DeclarationService,
               private declaration_attachmentDataService: DeclarationAttachmentService) {}

   ngOnInit() {
      this.goToPage(1);
      this.getDeclaration();
   }

   CodeFileDeclarationAttachment(event) {
      const reader = new FileReader();
      if (event.target.files && event.target.files.length > 0) {
         const file = event.target.files[0];
         reader.readAsDataURL(file);
         reader.onload = () => {
            this.declaration_attachmentSelected.declaration_attachment_file_name = file.name;
            this.declaration_attachmentSelected.declaration_attachment_file_type = file.type;
            this.declaration_attachmentSelected.declaration_attachment_file = reader.result.toString().split(',')[1];
         };
      }
   }

   selectDeclarationAttachment(declaration_attachment: DeclarationAttachment) {
      this.declaration_attachmentSelected = declaration_attachment;
   }

   getDeclaration() {
      this.declarations = [];
      this.declarationDataService.get().then( r => {
         this.declarations = r as Declaration[];
      }).catch( e => console.log(e) );
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getDeclarationAttachments();
   }

   getDeclarationAttachments() {
      this.declaration_attachments = [];
      this.declaration_attachmentSelected = new DeclarationAttachment();
      this.declaration_attachmentSelected.declaration_id = 0;
      this.declaration_attachmentDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.declaration_attachments = r.data as DeclarationAttachment[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newDeclarationAttachment(content) {
      this.declaration_attachmentSelected = new DeclarationAttachment();
      this.declaration_attachmentSelected.declaration_id = 0;
      this.openDialog(content);
   }

   editDeclarationAttachment(content) {
      if (typeof this.declaration_attachmentSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteDeclarationAttachment() {
      if (typeof this.declaration_attachmentSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.declaration_attachmentDataService.delete(this.declaration_attachmentSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getDeclarationAttachments();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.declaration_attachmentDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_DeclarationAttachments.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.declaration_attachmentDataService.get().then( r => {
         const backupData = r as DeclarationAttachment[];
         let output = 'id;declaration_attachment_file_type;declaration_attachment_file_name;declaration_attachment_file;declaration_id\n';
         backupData.forEach(element => {
            output += element.id + ';' + element.declaration_attachment_file_type + ';' + element.declaration_attachment_file_name + ';' + element.declaration_attachment_file + ';' + element.declaration_id + '\n';
         });
         const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_DeclarationAttachments.csv');
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
            this.declaration_attachmentDataService.masiveLoad(newData).then( r => {
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
            if (typeof this.declaration_attachmentSelected.id === 'undefined') {
               this.declaration_attachmentDataService.post(this.declaration_attachmentSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getDeclarationAttachments();
               }).catch( e => console.log(e) );
            } else {
               this.declaration_attachmentDataService.put(this.declaration_attachmentSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getDeclarationAttachments();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}