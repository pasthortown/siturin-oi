import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { PropertyTitleAttachmentService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/propertytitleattachment.service';
import { PropertyTitleAttachment } from './../../../../models/ALIMENTOSBEBIDAS/PropertyTitleAttachment';
import { RegisterService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/register.service';
import { Register } from './../../../../models/ALIMENTOSBEBIDAS/Register';


@Component({
   selector: 'app-propertytitleattachment',
   templateUrl: './propertytitleattachment.component.html',
   styleUrls: ['./propertytitleattachment.component.scss']
})
export class PropertyTitleAttachmentComponent implements OnInit {
   property_title_attachments: PropertyTitleAttachment[] = [];
   property_title_attachmentSelected: PropertyTitleAttachment = new PropertyTitleAttachment();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   registers: Register[] = [];
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private registerDataService: RegisterService,
               private property_title_attachmentDataService: PropertyTitleAttachmentService) {}

   ngOnInit() {
      this.goToPage(1);
      this.getRegister();
   }

   CodeFilePropertyTitleAttachment(event) {
      const reader = new FileReader();
      if (event.target.files && event.target.files.length > 0) {
         const file = event.target.files[0];
         reader.readAsDataURL(file);
         reader.onload = () => {
            this.property_title_attachmentSelected.property_title_attachment_file_name = file.name;
            this.property_title_attachmentSelected.property_title_attachment_file_type = file.type;
            this.property_title_attachmentSelected.property_title_attachment_file = reader.result.toString().split(',')[1];
         };
      }
   }

   selectPropertyTitleAttachment(property_title_attachment: PropertyTitleAttachment) {
      this.property_title_attachmentSelected = property_title_attachment;
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
      this.getPropertyTitleAttachments();
   }

   getPropertyTitleAttachments() {
      this.property_title_attachments = [];
      this.property_title_attachmentSelected = new PropertyTitleAttachment();
      this.property_title_attachmentSelected.register_id = 0;
      this.property_title_attachmentDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.property_title_attachments = r.data as PropertyTitleAttachment[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newPropertyTitleAttachment(content) {
      this.property_title_attachmentSelected = new PropertyTitleAttachment();
      this.property_title_attachmentSelected.register_id = 0;
      this.openDialog(content);
   }

   editPropertyTitleAttachment(content) {
      if (typeof this.property_title_attachmentSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deletePropertyTitleAttachment() {
      if (typeof this.property_title_attachmentSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.property_title_attachmentDataService.delete(this.property_title_attachmentSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getPropertyTitleAttachments();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.property_title_attachmentDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_PropertyTitleAttachments.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.property_title_attachmentDataService.get().then( r => {
         const backupData = r as PropertyTitleAttachment[];
         let output = 'id;property_title_attachment_file_type;property_title_attachment_file_name;property_title_attachment_file;register_id\n';
         backupData.forEach(element => {
            output += element.id; + element.property_title_attachment_file_type + ';' + element.property_title_attachment_file_name + ';' + element.property_title_attachment_file + ';' + element.register_id + '\n';
         });
         const blob = new Blob([output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_PropertyTitleAttachments.csv');
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
            this.property_title_attachmentDataService.masiveLoad(newData).then( r => {
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
            if (typeof this.property_title_attachmentSelected.id === 'undefined') {
               this.property_title_attachmentDataService.post(this.property_title_attachmentSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getPropertyTitleAttachments();
               }).catch( e => console.log(e) );
            } else {
               this.property_title_attachmentDataService.put(this.property_title_attachmentSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getPropertyTitleAttachments();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}