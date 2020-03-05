import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { DocumentService } from './../../../../services/CRUD/EXPORTER/document.service';
import { Document } from './../../../../models/EXPORTER/Document';

@Component({
   selector: 'app-document',
   templateUrl: './document.component.html',
   styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {
   documents: Document[] = [];
   documentSelected: Document = new Document();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private documentDataService: DocumentService) {}

   ngOnInit() {
      this.goToPage(1);
   }

   selectDocument(document: Document) {
      this.documentSelected = document;
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getDocuments();
   }

   getDocuments() {
      this.documents = [];
      this.documentSelected = new Document();
      this.documentDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.documents = r.data as Document[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newDocument(content) {
      this.documentSelected = new Document();
      this.openDialog(content);
   }

   editDocument(content) {
      if (typeof this.documentSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteDocument() {
      if (typeof this.documentSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.documentDataService.delete(this.documentSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getDocuments();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.documentDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_Documents.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.documentDataService.get().then( r => {
         const backupData = r as Document[];
         let output = 'id;params;code;procedure_id;activity;zonal;document_type;user\n';
         backupData.forEach(element => {
            output += element.id + ';' + element.params + ';' + element.code + ';' + element.procedure_id + ';' + element.activity + ';' + element.zonal + ';' + element.document_type + ';' + element.user + '\n';
         });
         const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_Documents.csv');
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
            this.documentDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true , size: 'lg' }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.documentSelected.id === 'undefined') {
               this.documentDataService.post(this.documentSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getDocuments();
               }).catch( e => console.log(e) );
            } else {
               this.documentDataService.put(this.documentSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getDocuments();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}