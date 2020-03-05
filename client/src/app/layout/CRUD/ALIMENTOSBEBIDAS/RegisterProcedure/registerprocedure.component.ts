import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { RegisterProcedureService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/registerprocedure.service';
import { RegisterProcedure } from './../../../../models/ALIMENTOSBEBIDAS/RegisterProcedure';
import { RegisterService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/register.service';
import { Register } from './../../../../models/ALIMENTOSBEBIDAS/Register';

import { ProcedureJustificationService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/procedurejustification.service';
import { ProcedureJustification } from './../../../../models/ALIMENTOSBEBIDAS/ProcedureJustification';


@Component({
   selector: 'app-registerprocedure',
   templateUrl: './registerprocedure.component.html',
   styleUrls: ['./registerprocedure.component.scss']
})
export class RegisterProcedureComponent implements OnInit {
   register_procedures: RegisterProcedure[] = [];
   register_procedureSelected: RegisterProcedure = new RegisterProcedure();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   registers: Register[] = [];
   procedure_justifications: ProcedureJustification[] = [];
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private registerDataService: RegisterService,
               private procedure_justificationDataService: ProcedureJustificationService,
               private register_procedureDataService: RegisterProcedureService) {}

   ngOnInit() {
      this.goToPage(1);
      this.getRegister();
      this.getProcedureJustification();
   }

   selectRegisterProcedure(register_procedure: RegisterProcedure) {
      this.register_procedureSelected = register_procedure;
   }

   getRegister() {
      this.registers = [];
      this.registerDataService.get().then( r => {
         this.registers = r as Register[];
      }).catch( e => console.log(e) );
   }

   getProcedureJustification() {
      this.procedure_justifications = [];
      this.procedure_justificationDataService.get().then( r => {
         this.procedure_justifications = r as ProcedureJustification[];
      }).catch( e => console.log(e) );
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getRegisterProcedures();
   }

   getRegisterProcedures() {
      this.register_procedures = [];
      this.register_procedureSelected = new RegisterProcedure();
      this.register_procedureSelected.register_id = 0;
      this.register_procedureSelected.procedure_justification_id = 0;
      this.register_procedureDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.register_procedures = r.data as RegisterProcedure[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newRegisterProcedure(content) {
      this.register_procedureSelected = new RegisterProcedure();
      this.register_procedureSelected.register_id = 0;
      this.register_procedureSelected.procedure_justification_id = 0;
      this.openDialog(content);
   }

   editRegisterProcedure(content) {
      if (typeof this.register_procedureSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteRegisterProcedure() {
      if (typeof this.register_procedureSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.register_procedureDataService.delete(this.register_procedureSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getRegisterProcedures();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.register_procedureDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_RegisterProcedures.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.register_procedureDataService.get().then( r => {
         const backupData = r as RegisterProcedure[];
         let output = 'id;date;register_id;procedure_justification_id\n';
         backupData.forEach(element => {
            output += element.id; + element.date + ';' + element.register_id + ';' + element.procedure_justification_id + '\n';
         });
         const blob = new Blob([output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_RegisterProcedures.csv');
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
            this.register_procedureDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.register_procedureSelected.id === 'undefined') {
               this.register_procedureDataService.post(this.register_procedureSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getRegisterProcedures();
               }).catch( e => console.log(e) );
            } else {
               this.register_procedureDataService.put(this.register_procedureSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getRegisterProcedures();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}