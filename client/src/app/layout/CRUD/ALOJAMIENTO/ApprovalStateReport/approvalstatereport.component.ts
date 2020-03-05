import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { ApprovalStateReportService } from './../../../../services/CRUD/ALOJAMIENTO/approvalstatereport.service';
import { ApprovalStateReport } from './../../../../models/ALOJAMIENTO/ApprovalStateReport';
import { ApprovalStateService } from './../../../../services/CRUD/ALOJAMIENTO/approvalstate.service';
import { ApprovalState } from './../../../../models/ALOJAMIENTO/ApprovalState';


@Component({
   selector: 'app-approvalstatereport',
   templateUrl: './approvalstatereport.component.html',
   styleUrls: ['./approvalstatereport.component.scss']
})
export class ApprovalStateReportComponent implements OnInit {
   approval_state_reports: ApprovalStateReport[] = [];
   approval_state_reportSelected: ApprovalStateReport = new ApprovalStateReport();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   approval_states: ApprovalState[] = [];
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private approval_stateDataService: ApprovalStateService,
               private approval_state_reportDataService: ApprovalStateReportService) {}

   ngOnInit() {
      this.goToPage(1);
      this.getApprovalState();
   }

   selectApprovalStateReport(approval_state_report: ApprovalStateReport) {
      this.approval_state_reportSelected = approval_state_report;
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
      this.getApprovalStateReports();
   }

   getApprovalStateReports() {
      this.approval_state_reports = [];
      this.approval_state_reportSelected = new ApprovalStateReport();
      this.approval_state_reportSelected.approval_state_id = 0;
      this.approval_state_reportDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.approval_state_reports = r.data as ApprovalStateReport[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newApprovalStateReport(content) {
      this.approval_state_reportSelected = new ApprovalStateReport();
      this.approval_state_reportSelected.approval_state_id = 0;
      this.openDialog(content);
   }

   editApprovalStateReport(content) {
      if (typeof this.approval_state_reportSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteApprovalStateReport() {
      if (typeof this.approval_state_reportSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.approval_state_reportDataService.delete(this.approval_state_reportSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getApprovalStateReports();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.approval_state_reportDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_ApprovalStateReports.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.approval_state_reportDataService.get().then( r => {
         const backupData = r as ApprovalStateReport[];
         let output = 'id;background;actions_done;conclution;recomendation;approval_state_id\n';
         backupData.forEach(element => {
            output += element.id + ';' + element.background + ';' + element.actions_done + ';' + element.conclution + ';' + element.recomendation + ';' + element.approval_state_id + '\n';
         });
         const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_ApprovalStateReports.csv');
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
            this.approval_state_reportDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true , size: 'lg' }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.approval_state_reportSelected.id === 'undefined') {
               this.approval_state_reportDataService.post(this.approval_state_reportSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getApprovalStateReports();
               }).catch( e => console.log(e) );
            } else {
               this.approval_state_reportDataService.put(this.approval_state_reportSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getApprovalStateReports();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}