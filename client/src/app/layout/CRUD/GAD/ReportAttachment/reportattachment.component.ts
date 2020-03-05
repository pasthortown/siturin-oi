import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { ReportAttachmentService } from './../../../../services/CRUD/GAD/reportattachment.service';
import { ReportAttachment } from './../../../../models/GAD/ReportAttachment';
import { ReportService } from './../../../../services/CRUD/GAD/report.service';
import { Report } from './../../../../models/GAD/Report';


@Component({
   selector: 'app-reportattachment',
   templateUrl: './reportattachment.component.html',
   styleUrls: ['./reportattachment.component.scss']
})
export class ReportAttachmentComponent implements OnInit {
   report_attachments: ReportAttachment[] = [];
   report_attachmentSelected: ReportAttachment = new ReportAttachment();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   reports: Report[] = [];
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private reportDataService: ReportService,
               private report_attachmentDataService: ReportAttachmentService) {}

   ngOnInit() {
      this.goToPage(1);
      this.getReport();
   }

   CodeFileReportAttachment(event) {
      const reader = new FileReader();
      if (event.target.files && event.target.files.length > 0) {
         const file = event.target.files[0];
         reader.readAsDataURL(file);
         reader.onload = () => {
            this.report_attachmentSelected.report_attachment_file_name = file.name;
            this.report_attachmentSelected.report_attachment_file_type = file.type;
            this.report_attachmentSelected.report_attachment_file = reader.result.toString().split(',')[1];
         };
      }
   }

   selectReportAttachment(report_attachment: ReportAttachment) {
      this.report_attachmentSelected = report_attachment;
   }

   getReport() {
      this.reports = [];
      this.reportDataService.get().then( r => {
         this.reports = r as Report[];
      }).catch( e => console.log(e) );
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getReportAttachments();
   }

   getReportAttachments() {
      this.report_attachments = [];
      this.report_attachmentSelected = new ReportAttachment();
      this.report_attachmentSelected.report_id = 0;
      this.report_attachmentDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.report_attachments = r.data as ReportAttachment[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newReportAttachment(content) {
      this.report_attachmentSelected = new ReportAttachment();
      this.report_attachmentSelected.report_id = 0;
      this.openDialog(content);
   }

   editReportAttachment(content) {
      if (typeof this.report_attachmentSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteReportAttachment() {
      if (typeof this.report_attachmentSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.report_attachmentDataService.delete(this.report_attachmentSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getReportAttachments();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.report_attachmentDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_ReportAttachments.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.report_attachmentDataService.get().then( r => {
         const backupData = r as ReportAttachment[];
         let output = 'id;report_attachment_file_type;report_attachment_file_name;report_attachment_file;report_id\n';
         backupData.forEach(element => {
            output += element.id; + element.report_attachment_file_type + ';' + element.report_attachment_file_name + ';' + element.report_attachment_file + ';' + element.report_id + '\n';
         });
         const blob = new Blob([output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_ReportAttachments.csv');
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
            this.report_attachmentDataService.masiveLoad(newData).then( r => {
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
            if (typeof this.report_attachmentSelected.id === 'undefined') {
               this.report_attachmentDataService.post(this.report_attachmentSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getReportAttachments();
               }).catch( e => console.log(e) );
            } else {
               this.report_attachmentDataService.put(this.report_attachmentSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getReportAttachments();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}