import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { RegisterStateService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/registerstate.service';
import { RegisterState } from './../../../../models/ALIMENTOSBEBIDAS/RegisterState';
import { RegisterService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/register.service';
import { Register } from './../../../../models/ALIMENTOSBEBIDAS/Register';

import { StateService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/state.service';
import { State } from './../../../../models/ALIMENTOSBEBIDAS/State';


@Component({
   selector: 'app-registerstate',
   templateUrl: './registerstate.component.html',
   styleUrls: ['./registerstate.component.scss']
})
export class RegisterStateComponent implements OnInit {
   register_states: RegisterState[] = [];
   register_stateSelected: RegisterState = new RegisterState();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   registers: Register[] = [];
   states: State[] = [];
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private registerDataService: RegisterService,
               private stateDataService: StateService,
               private register_stateDataService: RegisterStateService) {}

   ngOnInit() {
      this.goToPage(1);
      this.getRegister();
      this.getState();
   }

   selectRegisterState(register_state: RegisterState) {
      this.register_stateSelected = register_state;
   }

   getRegister() {
      this.registers = [];
      this.registerDataService.get().then( r => {
         this.registers = r as Register[];
      }).catch( e => console.log(e) );
   }

   getState() {
      this.states = [];
      this.stateDataService.get().then( r => {
         this.states = r as State[];
      }).catch( e => console.log(e) );
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getRegisterStates();
   }

   getRegisterStates() {
      this.register_states = [];
      this.register_stateSelected = new RegisterState();
      this.register_stateSelected.register_id = 0;
      this.register_stateSelected.state_id = 0;
      this.register_stateDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.register_states = r.data as RegisterState[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newRegisterState(content) {
      this.register_stateSelected = new RegisterState();
      this.register_stateSelected.register_id = 0;
      this.register_stateSelected.state_id = 0;
      this.openDialog(content);
   }

   editRegisterState(content) {
      if (typeof this.register_stateSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteRegisterState() {
      if (typeof this.register_stateSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.register_stateDataService.delete(this.register_stateSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getRegisterStates();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.register_stateDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_RegisterStates.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.register_stateDataService.get().then( r => {
         const backupData = r as RegisterState[];
         let output = 'id;justification;register_id;state_id\n';
         backupData.forEach(element => {
            output += element.id; + element.justification + ';' + element.register_id + ';' + element.state_id + '\n';
         });
         const blob = new Blob([output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_RegisterStates.csv');
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
            this.register_stateDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true , size: 'lg' }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.register_stateSelected.id === 'undefined') {
               this.register_stateDataService.post(this.register_stateSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getRegisterStates();
               }).catch( e => console.log(e) );
            } else {
               this.register_stateDataService.put(this.register_stateSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getRegisterStates();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}