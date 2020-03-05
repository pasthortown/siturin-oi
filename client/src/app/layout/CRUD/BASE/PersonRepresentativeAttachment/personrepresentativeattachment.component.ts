import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { PersonRepresentativeAttachmentService } from './../../../../services/CRUD/BASE/personrepresentativeattachment.service';
import { PersonRepresentativeAttachment } from './../../../../models/BASE/PersonRepresentativeAttachment';
import { PersonRepresentativeService } from './../../../../services/CRUD/BASE/personrepresentative.service';
import { PersonRepresentative } from './../../../../models/BASE/PersonRepresentative';


@Component({
   selector: 'app-personrepresentativeattachment',
   templateUrl: './personrepresentativeattachment.component.html',
   styleUrls: ['./personrepresentativeattachment.component.scss']
})
export class PersonRepresentativeAttachmentComponent implements OnInit {
   person_representative_attachments: PersonRepresentativeAttachment[] = [];
   person_representative_attachmentSelected: PersonRepresentativeAttachment = new PersonRepresentativeAttachment();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   person_representatives: PersonRepresentative[] = [];
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private person_representativeDataService: PersonRepresentativeService,
               private person_representative_attachmentDataService: PersonRepresentativeAttachmentService) {}

   ngOnInit() {
      this.goToPage(1);
      this.getPersonRepresentative();
   }

   CodeFilePersonRepresentativeAttachment(event) {
      const reader = new FileReader();
      if (event.target.files && event.target.files.length > 0) {
         const file = event.target.files[0];
         reader.readAsDataURL(file);
         reader.onload = () => {
            this.person_representative_attachmentSelected.person_representative_attachment_file_name = file.name;
            this.person_representative_attachmentSelected.person_representative_attachment_file_type = file.type;
            this.person_representative_attachmentSelected.person_representative_attachment_file = reader.result.toString().split(',')[1];
         };
      }
   }

   selectPersonRepresentativeAttachment(person_representative_attachment: PersonRepresentativeAttachment) {
      this.person_representative_attachmentSelected = person_representative_attachment;
   }

   getPersonRepresentative() {
      this.person_representatives = [];
      this.person_representativeDataService.get().then( r => {
         this.person_representatives = r as PersonRepresentative[];
      }).catch( e => console.log(e) );
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getPersonRepresentativeAttachments();
   }

   getPersonRepresentativeAttachments() {
      this.person_representative_attachments = [];
      this.person_representative_attachmentSelected = new PersonRepresentativeAttachment();
      this.person_representative_attachmentSelected.person_representative_id = 0;
      this.person_representative_attachmentDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.person_representative_attachments = r.data as PersonRepresentativeAttachment[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newPersonRepresentativeAttachment(content) {
      this.person_representative_attachmentSelected = new PersonRepresentativeAttachment();
      this.person_representative_attachmentSelected.person_representative_id = 0;
      this.openDialog(content);
   }

   editPersonRepresentativeAttachment(content) {
      if (typeof this.person_representative_attachmentSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deletePersonRepresentativeAttachment() {
      if (typeof this.person_representative_attachmentSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.person_representative_attachmentDataService.delete(this.person_representative_attachmentSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getPersonRepresentativeAttachments();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.person_representative_attachmentDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_PersonRepresentativeAttachments.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.person_representative_attachmentDataService.get().then( r => {
         const backupData = r as PersonRepresentativeAttachment[];
         let output = 'id;person_representative_attachment_file_type;person_representative_attachment_file_name;person_representative_attachment_file;ruc;assignment_date;person_representative_id\n';
         backupData.forEach(element => {
            output += element.id + ';' + element.person_representative_attachment_file_type + ';' + element.person_representative_attachment_file_name + ';' + element.person_representative_attachment_file + ';' + element.ruc + ';' + element.assignment_date + ';' + element.person_representative_id + '\n';
         });
         const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_PersonRepresentativeAttachments.csv');
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
            this.person_representative_attachmentDataService.masiveLoad(newData).then( r => {
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
            if (typeof this.person_representative_attachmentSelected.id === 'undefined') {
               this.person_representative_attachmentDataService.post(this.person_representative_attachmentSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getPersonRepresentativeAttachments();
               }).catch( e => console.log(e) );
            } else {
               this.person_representative_attachmentDataService.put(this.person_representative_attachmentSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getPersonRepresentativeAttachments();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}