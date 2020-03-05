import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { ProcedureService } from './../../../../services/CRUD/ALOJAMIENTO/procedure.service';
import { Procedure } from './../../../../models/ALOJAMIENTO/Procedure';

@Component({
   selector: 'app-procedure',
   templateUrl: './procedure.component.html',
   styleUrls: ['./procedure.component.scss']
})
export class ProcedureComponent implements OnInit {
   procedures: Procedure[] = [];
   procedureSelected: Procedure = new Procedure();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private procedureDataService: ProcedureService) {}

   ngOnInit() {
      this.goToPage(1);
   }

   selectProcedure(procedure: Procedure) {
      this.procedureSelected = procedure;
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getProcedures();
   }

   getProcedures() {
      this.procedures = [];
      this.procedureSelected = new Procedure();
      this.procedureDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.procedures = r.data as Procedure[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newProcedure(content) {
      this.procedureSelected = new Procedure();
      this.openDialog(content);
   }

   editProcedure(content) {
      if (typeof this.procedureSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteProcedure() {
      if (typeof this.procedureSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.procedureDataService.delete(this.procedureSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getProcedures();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.procedureDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_Procedures.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.procedureDataService.get().then( r => {
         const backupData = r as Procedure[];
         let output = 'id;name\n';
         backupData.forEach(element => {
            output += element.id; + element.name + '\n';
         });
         const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_Procedures.csv');
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
            this.procedureDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.procedureSelected.id === 'undefined') {
               this.procedureDataService.post(this.procedureSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getProcedures();
               }).catch( e => console.log(e) );
            } else {
               this.procedureDataService.put(this.procedureSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getProcedures();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}