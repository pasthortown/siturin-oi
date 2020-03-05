import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { RucNameTypeService } from './../../../../services/CRUD/BASE/rucnametype.service';
import { RucNameType } from './../../../../models/BASE/RucNameType';

@Component({
   selector: 'app-rucnametype',
   templateUrl: './rucnametype.component.html',
   styleUrls: ['./rucnametype.component.scss']
})
export class RucNameTypeComponent implements OnInit {
   ruc_name_types: RucNameType[] = [];
   ruc_name_typeSelected: RucNameType = new RucNameType();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private ruc_name_typeDataService: RucNameTypeService) {}

   ngOnInit() {
      this.goToPage(1);
   }

   selectRucNameType(ruc_name_type: RucNameType) {
      this.ruc_name_typeSelected = ruc_name_type;
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getRucNameTypes();
   }

   getRucNameTypes() {
      this.ruc_name_types = [];
      this.ruc_name_typeSelected = new RucNameType();
      this.ruc_name_typeDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.ruc_name_types = r.data as RucNameType[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newRucNameType(content) {
      this.ruc_name_typeSelected = new RucNameType();
      this.openDialog(content);
   }

   editRucNameType(content) {
      if (typeof this.ruc_name_typeSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteRucNameType() {
      if (typeof this.ruc_name_typeSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.ruc_name_typeDataService.delete(this.ruc_name_typeSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getRucNameTypes();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.ruc_name_typeDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_RucNameTypes.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.ruc_name_typeDataService.get().then( r => {
         const backupData = r as RucNameType[];
         let output = 'id;name;description\n';
         backupData.forEach(element => {
            output += element.id + ';' + element.name + ';' + element.description + '\n';
         });
         const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_RucNameTypes.csv');
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
            this.ruc_name_typeDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true , size: 'lg' }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.ruc_name_typeSelected.id === 'undefined' || this.ruc_name_typeSelected.id == 0) {
               this.ruc_name_typeDataService.post(this.ruc_name_typeSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getRucNameTypes();
               }).catch( e => console.log(e) );
            } else {
               this.ruc_name_typeDataService.put(this.ruc_name_typeSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getRucNameTypes();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}