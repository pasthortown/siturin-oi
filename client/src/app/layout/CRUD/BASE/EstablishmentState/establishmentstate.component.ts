import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { EstablishmentStateService } from './../../../../services/CRUD/BASE/establishmentstate.service';
import { EstablishmentState } from './../../../../models/BASE/EstablishmentState';
import { StateService } from './../../../../services/CRUD/BASE/state.service';
import { State } from './../../../../models/BASE/State';

import { EstablishmentService } from './../../../../services/CRUD/BASE/establishment.service';
import { Establishment } from './../../../../models/BASE/Establishment';


@Component({
   selector: 'app-establishmentstate',
   templateUrl: './establishmentstate.component.html',
   styleUrls: ['./establishmentstate.component.scss']
})
export class EstablishmentStateComponent implements OnInit {
   establishment_states: EstablishmentState[] = [];
   establishment_stateSelected: EstablishmentState = new EstablishmentState();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   states: State[] = [];
   establishments: Establishment[] = [];
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private stateDataService: StateService,
               private establishmentDataService: EstablishmentService,
               private establishment_stateDataService: EstablishmentStateService) {}

   ngOnInit() {
      this.goToPage(1);
      this.getState();
      this.getEstablishment();
   }

   selectEstablishmentState(establishment_state: EstablishmentState) {
      this.establishment_stateSelected = establishment_state;
   }

   getState() {
      this.states = [];
      this.stateDataService.get().then( r => {
         this.states = r as State[];
      }).catch( e => console.log(e) );
   }

   getEstablishment() {
      this.establishments = [];
      this.establishmentDataService.get().then( r => {
         this.establishments = r as Establishment[];
      }).catch( e => console.log(e) );
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getEstablishmentStates();
   }

   getEstablishmentStates() {
      this.establishment_states = [];
      this.establishment_stateSelected = new EstablishmentState();
      this.establishment_stateSelected.state_id = 0;
      this.establishment_stateSelected.establishment_id = 0;
      this.establishment_stateDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.establishment_states = r.data as EstablishmentState[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newEstablishmentState(content) {
      this.establishment_stateSelected = new EstablishmentState();
      this.establishment_stateSelected.state_id = 0;
      this.establishment_stateSelected.establishment_id = 0;
      this.openDialog(content);
   }

   editEstablishmentState(content) {
      if (typeof this.establishment_stateSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteEstablishmentState() {
      if (typeof this.establishment_stateSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.establishment_stateDataService.delete(this.establishment_stateSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getEstablishmentStates();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.establishment_stateDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_EstablishmentStates.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.establishment_stateDataService.get().then( r => {
         const backupData = r as EstablishmentState[];
         let output = 'id;justification;state_id;establishment_id\n';
         backupData.forEach(element => {
            output += element.id + ';' + element.justification + ';' + element.state_id + ';' + element.establishment_id + '\n';
         });
         const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_EstablishmentStates.csv');
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
            this.establishment_stateDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true , size: 'lg' }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.establishment_stateSelected.id === 'undefined') {
               this.establishment_stateDataService.post(this.establishment_stateSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getEstablishmentStates();
               }).catch( e => console.log(e) );
            } else {
               this.establishment_stateDataService.put(this.establishment_stateSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getEstablishmentStates();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}