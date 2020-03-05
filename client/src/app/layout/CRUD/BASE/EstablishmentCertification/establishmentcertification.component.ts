import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { EstablishmentCertificationService } from './../../../../services/CRUD/BASE/establishmentcertification.service';
import { EstablishmentCertification } from './../../../../models/BASE/EstablishmentCertification';
import { EstablishmentCertificationTypeService } from './../../../../services/CRUD/BASE/establishmentcertificationtype.service';
import { EstablishmentCertificationType } from './../../../../models/BASE/EstablishmentCertificationType';

import { EstablishmentCertificationAttachmentService } from './../../../../services/CRUD/BASE/establishmentcertificationattachment.service';
import { EstablishmentCertificationAttachment } from './../../../../models/BASE/EstablishmentCertificationAttachment';


@Component({
   selector: 'app-establishmentcertification',
   templateUrl: './establishmentcertification.component.html',
   styleUrls: ['./establishmentcertification.component.scss']
})
export class EstablishmentCertificationComponent implements OnInit {
   establishment_certifications: EstablishmentCertification[] = [];
   establishment_certificationSelected: EstablishmentCertification = new EstablishmentCertification();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   establishment_certification_types: EstablishmentCertificationType[] = [];
   establishment_certification_attachments: EstablishmentCertificationAttachment[] = [];
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private establishment_certification_typeDataService: EstablishmentCertificationTypeService,
               private establishment_certification_attachmentDataService: EstablishmentCertificationAttachmentService,
               private establishment_certificationDataService: EstablishmentCertificationService) {}

   ngOnInit() {
      this.goToPage(1);
      this.getEstablishmentCertificationType();
      this.getEstablishmentCertificationAttachment();
   }

   selectEstablishmentCertification(establishment_certification: EstablishmentCertification) {
      this.establishment_certificationSelected = establishment_certification;
   }

   getEstablishmentCertificationType() {
      this.establishment_certification_types = [];
      this.establishment_certification_typeDataService.get().then( r => {
         this.establishment_certification_types = r as EstablishmentCertificationType[];
      }).catch( e => console.log(e) );
   }

   getEstablishmentCertificationAttachment() {
      this.establishment_certification_attachments = [];
      this.establishment_certification_attachmentDataService.get().then( r => {
         this.establishment_certification_attachments = r as EstablishmentCertificationAttachment[];
      }).catch( e => console.log(e) );
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getEstablishmentCertifications();
   }

   getEstablishmentCertifications() {
      this.establishment_certifications = [];
      this.establishment_certificationSelected = new EstablishmentCertification();
      this.establishment_certificationSelected.establishment_certification_type_id = 0;
      this.establishment_certificationSelected.establishment_certification_attachment_id = 0;
      this.establishment_certificationDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.establishment_certifications = r.data as EstablishmentCertification[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newEstablishmentCertification(content) {
      this.establishment_certificationSelected = new EstablishmentCertification();
      this.establishment_certificationSelected.establishment_certification_type_id = 0;
      this.establishment_certificationSelected.establishment_certification_attachment_id = 0;
      this.openDialog(content);
   }

   editEstablishmentCertification(content) {
      if (typeof this.establishment_certificationSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteEstablishmentCertification() {
      if (typeof this.establishment_certificationSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.establishment_certificationDataService.delete(this.establishment_certificationSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getEstablishmentCertifications();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.establishment_certificationDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_EstablishmentCertifications.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.establishment_certificationDataService.get().then( r => {
         const backupData = r as EstablishmentCertification[];
         let output = 'id;establishment_certification_type_id;establishment_certification_attachment_id\n';
         backupData.forEach(element => {
            output += element.id + ';' + element.establishment_certification_type_id + ';' + element.establishment_certification_attachment_id + '\n';
         });
         const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_EstablishmentCertifications.csv');
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
            this.establishment_certificationDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.establishment_certificationSelected.id === 'undefined') {
               this.establishment_certificationDataService.post(this.establishment_certificationSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getEstablishmentCertifications();
               }).catch( e => console.log(e) );
            } else {
               this.establishment_certificationDataService.put(this.establishment_certificationSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getEstablishmentCertifications();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}