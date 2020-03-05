import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { StateService } from './../../../../services/CRUD/BASE/state.service';
import { State } from './../../../../models/BASE/State';

@Component({
   selector: 'app-state',
   templateUrl: './state.component.html',
   styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {
   states: State[] = [];
   stateSelected: State = new State();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private stateDataService: StateService) {}

   ngOnInit() {
      this.goToPage(1);
   }

   selectState(state: State) {
      this.stateSelected = state;
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getStates();
   }

   getStates() {
      this.states = [];
      this.stateSelected = new State();
      this.stateDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.states = r.data as State[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newState(content) {
      this.stateSelected = new State();
      this.openDialog(content);
   }

   editState(content) {
      if (typeof this.stateSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteState() {
      if (typeof this.stateSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.stateDataService.delete(this.stateSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getStates();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.stateDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_States.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.stateDataService.get().then( r => {
         const backupData = r as State[];
         let output = 'id;name;description\n';
         backupData.forEach(element => {
            output += element.id + ';' + element.name + ';' + element.description + '\n';
         });
         const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_States.csv');
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
            this.stateDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true , size: 'lg' }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.stateSelected.id === 'undefined') {
               this.stateDataService.post(this.stateSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getStates();
               }).catch( e => console.log(e) );
            } else {
               this.stateDataService.put(this.stateSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getStates();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}