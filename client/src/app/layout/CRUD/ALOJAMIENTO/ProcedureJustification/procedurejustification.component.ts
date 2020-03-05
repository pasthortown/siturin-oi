import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { ProcedureJustificationService } from './../../../../services/CRUD/ALOJAMIENTO/procedurejustification.service';
import { ProcedureJustification } from './../../../../models/ALOJAMIENTO/ProcedureJustification';
import { ProcedureService } from './../../../../services/CRUD/ALOJAMIENTO/procedure.service';
import { Procedure } from './../../../../models/ALOJAMIENTO/Procedure';


@Component({
   selector: 'app-procedurejustification',
   templateUrl: './procedurejustification.component.html',
   styleUrls: ['./procedurejustification.component.scss']
})
export class ProcedureJustificationComponent implements OnInit {
   procedure_justifications: ProcedureJustification[] = [];
   procedure_justificationSelected: ProcedureJustification = new ProcedureJustification();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   procedures: Procedure[] = [];
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private procedureDataService: ProcedureService,
               private procedure_justificationDataService: ProcedureJustificationService) {}

   ngOnInit() {
      this.goToPage(1);
      this.getProcedure();
   }

   selectProcedureJustification(procedure_justification: ProcedureJustification) {
      this.procedure_justificationSelected = procedure_justification;
   }

   getProcedure() {
      this.procedures = [];
      this.procedureDataService.get().then( r => {
         this.procedures = r as Procedure[];
      }).catch( e => console.log(e) );
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getProcedureJustifications();
   }

   getProcedureJustifications() {
      this.procedure_justifications = [];
      this.procedure_justificationSelected = new ProcedureJustification();
      this.procedure_justificationSelected.procedure_id = 0;
      this.procedure_justificationDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.procedure_justifications = r.data as ProcedureJustification[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newProcedureJustification(content) {
      this.procedure_justificationSelected = new ProcedureJustification();
      this.procedure_justificationSelected.procedure_id = 0;
      this.openDialog(content);
   }

   editProcedureJustification(content) {
      if (typeof this.procedure_justificationSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteProcedureJustification() {
      if (typeof this.procedure_justificationSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.procedure_justificationDataService.delete(this.procedure_justificationSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getProcedureJustifications();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.procedure_justificationDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_ProcedureJustifications.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.procedure_justificationDataService.get().then( r => {
         const backupData = r as ProcedureJustification[];
         let output = 'id;justification;procedure_id\n';
         backupData.forEach(element => {
            output += element.id; + element.justification + ';' + element.procedure_id + '\n';
         });
         const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_ProcedureJustifications.csv');
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
            this.procedure_justificationDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true , size: 'lg' }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.procedure_justificationSelected.id === 'undefined') {
               this.procedure_justificationDataService.post(this.procedure_justificationSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getProcedureJustifications();
               }).catch( e => console.log(e) );
            } else {
               this.procedure_justificationDataService.put(this.procedure_justificationSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getProcedureJustifications();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}