import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { StateDeclarationService } from './../../../../services/CRUD/FINANCIERO/statedeclaration.service';
import { StateDeclaration } from './../../../../models/FINANCIERO/StateDeclaration';
import { DeclarationService } from './../../../../services/CRUD/FINANCIERO/declaration.service';
import { Declaration } from './../../../../models/FINANCIERO/Declaration';

import { StateService } from './../../../../services/CRUD/FINANCIERO/state.service';
import { State } from './../../../../models/FINANCIERO/State';


@Component({
   selector: 'app-statedeclaration',
   templateUrl: './statedeclaration.component.html',
   styleUrls: ['./statedeclaration.component.scss']
})
export class StateDeclarationComponent implements OnInit {
   state_declarations: StateDeclaration[] = [];
   state_declarationSelected: StateDeclaration = new StateDeclaration();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   declarations: Declaration[] = [];
   states: State[] = [];
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private declarationDataService: DeclarationService,
               private stateDataService: StateService,
               private state_declarationDataService: StateDeclarationService) {}

   ngOnInit() {
      this.goToPage(1);
      this.getDeclaration();
      this.getState();
   }

   selectStateDeclaration(state_declaration: StateDeclaration) {
      this.state_declarationSelected = state_declaration;
   }

   getDeclaration() {
      this.declarations = [];
      this.declarationDataService.get().then( r => {
         this.declarations = r as Declaration[];
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
      this.getStateDeclarations();
   }

   getStateDeclarations() {
      this.state_declarations = [];
      this.state_declarationSelected = new StateDeclaration();
      this.state_declarationSelected.declaration_id = 0;
      this.state_declarationSelected.state_id = 0;
      this.state_declarationDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.state_declarations = r.data as StateDeclaration[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newStateDeclaration(content) {
      this.state_declarationSelected = new StateDeclaration();
      this.state_declarationSelected.declaration_id = 0;
      this.state_declarationSelected.state_id = 0;
      this.openDialog(content);
   }

   editStateDeclaration(content) {
      if (typeof this.state_declarationSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteStateDeclaration() {
      if (typeof this.state_declarationSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.state_declarationDataService.delete(this.state_declarationSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getStateDeclarations();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.state_declarationDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_StateDeclarations.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.state_declarationDataService.get().then( r => {
         const backupData = r as StateDeclaration[];
         let output = 'id;justification;moment;declaration_id;state_id\n';
         backupData.forEach(element => {
            output += element.id + ';' + element.justification + ';' + element.moment + ';' + element.declaration_id + ';' + element.state_id + '\n';
         });
         const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_StateDeclarations.csv');
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
            this.state_declarationDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true , size: 'lg' }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.state_declarationSelected.id === 'undefined') {
               this.state_declarationDataService.post(this.state_declarationSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getStateDeclarations();
               }).catch( e => console.log(e) );
            } else {
               this.state_declarationDataService.put(this.state_declarationSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getStateDeclarations();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}