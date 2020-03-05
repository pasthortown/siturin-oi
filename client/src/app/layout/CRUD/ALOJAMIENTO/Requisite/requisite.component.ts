import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { RequisiteService } from './../../../../services/CRUD/ALOJAMIENTO/requisite.service';
import { Requisite } from './../../../../models/ALOJAMIENTO/Requisite';
import { RegisterTypeService } from './../../../../services/CRUD/ALOJAMIENTO/registertype.service';
import { RegisterType } from './../../../../models/ALOJAMIENTO/RegisterType';


@Component({
   selector: 'app-requisite',
   templateUrl: './requisite.component.html',
   styleUrls: ['./requisite.component.scss']
})
export class RequisiteComponent implements OnInit {
   requisites: Requisite[] = [];
   requisiteSelected: Requisite = new Requisite();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   register_types: RegisterType[] = [];
   regionSelectedCode = '-';
   classificationSelectedCode = '-';
   clasifications_registers = [];
   categorySelectedID = 0;
   categories = [];
   requisitesFiltered = [];

   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private register_typeDataService: RegisterTypeService,
               private requisiteDataService: RequisiteService) {}

   ngOnInit() {
      this.goToPage(1);
      this.getRegisterType();
   }

   getClassifications() {
      this.clasifications_registers = [];
      this.register_types.forEach( element => {
         if (element.father_code == this.regionSelectedCode) {
            this.clasifications_registers.push(element);
         }
      });
   }

   getCategories() {
      this.categories = [];
      this.register_types.forEach( element => {
         if (element.father_code == this.classificationSelectedCode) {
            this.categories.push(element);
         }
      });
   }

   showFilteredRequisites() {
      this.requisites = [];
      this.requisiteDataService.get_filtered(this.categorySelectedID).then( r => {
         this.requisites = r as Requisite[];
      }).catch( e => { console.log(e); });
   }

   selectRequisite(requisite: Requisite) {
      this.requisiteSelected = requisite;
   }

   getRegisterType() {
      this.register_types = [];
      this.register_typeDataService.get().then( r => {
         this.register_types = r as RegisterType[];
      }).catch( e => console.log(e) );
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getRequisites();
   }

   getRequisites() {
      this.requisites = [];
      this.requisiteSelected = new Requisite();
      this.requisiteSelected.register_type_id = 0;
      this.requisiteDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.requisites = r.data as Requisite[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newRequisite(content) {
      this.requisiteSelected = new Requisite();
      this.requisiteSelected.register_type_id = 0;
      this.openDialog(content);
   }

   editRequisite(content) {
      if (typeof this.requisiteSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteRequisite() {
      if (typeof this.requisiteSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.requisiteDataService.delete(this.requisiteSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getRequisites();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.requisiteDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_Requisites.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.requisiteDataService.get().then( r => {
         const backupData = r as Requisite[];
         let output = 'id;name;description;father_code;to_approve;mandatory;type;params;code;register_type_id\n';
         backupData.forEach(element => {
            output += element.id + ';' + element.name + ';' + element.description + ';' + element.father_code + ';' + element.to_approve + ';' + element.mandatory + ';' + element.type + ';' + element.params + ';' + element.code + ';' + element.register_type_id + '\n';
         });
         const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_Requisites.csv');
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
            this.requisiteDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true , size: 'lg' }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.requisiteSelected.id === 'undefined') {
               this.requisiteDataService.post(this.requisiteSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getRequisites();
               }).catch( e => console.log(e) );
            } else {
               this.requisiteDataService.put(this.requisiteSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getRequisites();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}