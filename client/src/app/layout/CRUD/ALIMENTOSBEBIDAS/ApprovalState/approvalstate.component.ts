import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { ApprovalStateService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/approvalstate.service';
import { ApprovalState } from './../../../../models/ALIMENTOSBEBIDAS/ApprovalState';
import { RegisterService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/register.service';
import { Register } from './../../../../models/ALIMENTOSBEBIDAS/Register';

import { ApprovalService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/approval.service';
import { Approval } from './../../../../models/ALIMENTOSBEBIDAS/Approval';


@Component({
   selector: 'app-approvalstate',
   templateUrl: './approvalstate.component.html',
   styleUrls: ['./approvalstate.component.scss']
})
export class ApprovalStateComponent implements OnInit {
   approval_states: ApprovalState[] = [];
   approval_stateSelected: ApprovalState = new ApprovalState();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   registers: Register[] = [];
   approvals: Approval[] = [];
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private registerDataService: RegisterService,
               private approvalDataService: ApprovalService,
               private approval_stateDataService: ApprovalStateService) {}

   ngOnInit() {
      this.goToPage(1);
      this.getRegister();
      this.getApproval();
   }

   selectApprovalState(approval_state: ApprovalState) {
      this.approval_stateSelected = approval_state;
   }

   getRegister() {
      this.registers = [];
      this.registerDataService.get().then( r => {
         this.registers = r as Register[];
      }).catch( e => console.log(e) );
   }

   getApproval() {
      this.approvals = [];
      this.approvalDataService.get().then( r => {
         this.approvals = r as Approval[];
      }).catch( e => console.log(e) );
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getApprovalStates();
   }

   getApprovalStates() {
      this.approval_states = [];
      this.approval_stateSelected = new ApprovalState();
      this.approval_stateSelected.register_id = 0;
      this.approval_stateSelected.approval_id = 0;
      this.approval_stateDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.approval_states = r.data as ApprovalState[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newApprovalState(content) {
      this.approval_stateSelected = new ApprovalState();
      this.approval_stateSelected.register_id = 0;
      this.approval_stateSelected.approval_id = 0;
      this.openDialog(content);
   }

   editApprovalState(content) {
      if (typeof this.approval_stateSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteApprovalState() {
      if (typeof this.approval_stateSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.approval_stateDataService.delete(this.approval_stateSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getApprovalStates();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.approval_stateDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_ApprovalStates.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.approval_stateDataService.get().then( r => {
         const backupData = r as ApprovalState[];
         let output = 'id;value;date_assigment;notes;id_user;date_fullfill;register_id;approval_id\n';
         backupData.forEach(element => {
            output += element.id; + element.value + ';' + element.date_assigment + ';' + element.notes + ';' + element.id_user + ';' + element.date_fullfill + ';' + element.register_id + ';' + element.approval_id + '\n';
         });
         const blob = new Blob([output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_ApprovalStates.csv');
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
            this.approval_stateDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true , size: 'lg' }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.approval_stateSelected.id === 'undefined') {
               this.approval_stateDataService.post(this.approval_stateSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getApprovalStates();
               }).catch( e => console.log(e) );
            } else {
               this.approval_stateDataService.put(this.approval_stateSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getApprovalStates();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}