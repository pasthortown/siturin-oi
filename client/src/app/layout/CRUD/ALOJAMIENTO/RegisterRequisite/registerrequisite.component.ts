import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { RegisterRequisiteService } from './../../../../services/CRUD/ALOJAMIENTO/registerrequisite.service';
import { RegisterRequisite } from './../../../../models/ALOJAMIENTO/RegisterRequisite';
import { RequisiteService } from './../../../../services/CRUD/ALOJAMIENTO/requisite.service';
import { Requisite } from './../../../../models/ALOJAMIENTO/Requisite';

import { RegisterService } from './../../../../services/CRUD/ALOJAMIENTO/register.service';
import { Register } from './../../../../models/ALOJAMIENTO/Register';


@Component({
   selector: 'app-registerrequisite',
   templateUrl: './registerrequisite.component.html',
   styleUrls: ['./registerrequisite.component.scss']
})
export class RegisterRequisiteComponent implements OnInit {
   register_requisites: RegisterRequisite[] = [];
   register_requisiteSelected: RegisterRequisite = new RegisterRequisite();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   requisites: Requisite[] = [];
   registers: Register[] = [];
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private requisiteDataService: RequisiteService,
               private registerDataService: RegisterService,
               private register_requisiteDataService: RegisterRequisiteService) {}

   ngOnInit() {
      this.goToPage(1);
      this.getRequisite();
      this.getRegister();
   }

   selectRegisterRequisite(register_requisite: RegisterRequisite) {
      this.register_requisiteSelected = register_requisite;
   }

   getRequisite() {
      this.requisites = [];
      this.requisiteDataService.get().then( r => {
         this.requisites = r as Requisite[];
      }).catch( e => console.log(e) );
   }

   getRegister() {
      this.registers = [];
      this.registerDataService.get().then( r => {
         this.registers = r as Register[];
      }).catch( e => console.log(e) );
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getRegisterRequisites();
   }

   getRegisterRequisites() {
      this.register_requisites = [];
      this.register_requisiteSelected = new RegisterRequisite();
      this.register_requisiteSelected.requisite_id = 0;
      this.register_requisiteSelected.register_id = 0;
      this.register_requisiteDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.register_requisites = r.data as RegisterRequisite[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newRegisterRequisite(content) {
      this.register_requisiteSelected = new RegisterRequisite();
      this.register_requisiteSelected.requisite_id = 0;
      this.register_requisiteSelected.register_id = 0;
      this.openDialog(content);
   }

   editRegisterRequisite(content) {
      if (typeof this.register_requisiteSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteRegisterRequisite() {
      if (typeof this.register_requisiteSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.register_requisiteDataService.delete(this.register_requisiteSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getRegisterRequisites();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.register_requisiteDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_RegisterRequisites.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.register_requisiteDataService.get().then( r => {
         const backupData = r as RegisterRequisite[];
         let output = 'id;fullfill;value;requisite_id;register_id\n';
         backupData.forEach(element => {
            output += element.id + ';' + element.fullfill + ';' + element.value + ';' + element.requisite_id + ';' + element.register_id + '\n';
         });
         const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_RegisterRequisites.csv');
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
            this.register_requisiteDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.register_requisiteSelected.id === 'undefined') {
               this.register_requisiteDataService.post(this.register_requisiteSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getRegisterRequisites();
               }).catch( e => console.log(e) );
            } else {
               this.register_requisiteDataService.put(this.register_requisiteSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getRegisterRequisites();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}