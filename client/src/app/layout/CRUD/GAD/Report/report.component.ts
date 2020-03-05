import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { ReportService } from './../../../../services/CRUD/GAD/report.service';
import { Report } from './../../../../models/GAD/Report';

@Component({
   selector: 'app-report',
   templateUrl: './report.component.html',
   styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
   reports: Report[] = [];
   reportSelected: Report = new Report();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private reportDataService: ReportService) {}

   ngOnInit() {
      this.goToPage(1);
   }

   selectReport(report: Report) {
      this.reportSelected = report;
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getReports();
   }

   getReports() {
      this.reports = [];
      this.reportSelected = new Report();
      this.reportDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.reports = r.data as Report[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newReport(content) {
      this.reportSelected = new Report();
      this.openDialog(content);
   }

   editReport(content) {
      if (typeof this.reportSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteReport() {
      if (typeof this.reportSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.reportDataService.delete(this.reportSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getReports();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.reportDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_Reports.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.reportDataService.get().then( r => {
         const backupData = r as Report[];
         let output = 'id;id_register;date;comment;id_ubication;id_user\n';
         backupData.forEach(element => {
            output += element.id; + element.id_register + ';' + element.date + ';' + element.comment + ';' + element.id_ubication + ';' + element.id_user + '\n';
         });
         const blob = new Blob([output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_Reports.csv');
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
            this.reportDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true , size: 'lg' }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.reportSelected.id === 'undefined') {
               this.reportDataService.post(this.reportSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getReports();
               }).catch( e => console.log(e) );
            } else {
               this.reportDataService.put(this.reportSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getReports();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}