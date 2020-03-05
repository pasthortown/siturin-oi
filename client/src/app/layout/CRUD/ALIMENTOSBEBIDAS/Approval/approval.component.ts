import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { ApprovalService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/approval.service';
import { Approval } from './../../../../models/ALIMENTOSBEBIDAS/Approval';

@Component({
   selector: 'app-approval',
   templateUrl: './approval.component.html',
   styleUrls: ['./approval.component.scss']
})
export class ApprovalComponent implements OnInit {
   approvals: Approval[] = [];
   approvalSelected: Approval = new Approval();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private approvalDataService: ApprovalService) {}

   ngOnInit() {
      this.goToPage(1);
   }

   selectApproval(approval: Approval) {
      this.approvalSelected = approval;
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getApprovals();
   }

   getApprovals() {
      this.approvals = [];
      this.approvalSelected = new Approval();
      this.approvalDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.approvals = r.data as Approval[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newApproval(content) {
      this.approvalSelected = new Approval();
      this.openDialog(content);
   }

   editApproval(content) {
      if (typeof this.approvalSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteApproval() {
      if (typeof this.approvalSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.approvalDataService.delete(this.approvalSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getApprovals();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.approvalDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_Approvals.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.approvalDataService.get().then( r => {
         const backupData = r as Approval[];
         let output = 'id;name\n';
         backupData.forEach(element => {
            output += element.id; + element.name + '\n';
         });
         const blob = new Blob([output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_Approvals.csv');
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
            this.approvalDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.approvalSelected.id === 'undefined') {
               this.approvalDataService.post(this.approvalSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getApprovals();
               }).catch( e => console.log(e) );
            } else {
               this.approvalDataService.put(this.approvalSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getApprovals();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}