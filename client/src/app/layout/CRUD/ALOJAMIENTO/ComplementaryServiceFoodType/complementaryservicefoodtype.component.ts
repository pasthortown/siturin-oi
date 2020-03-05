import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { ComplementaryServiceFoodTypeService } from './../../../../services/CRUD/ALOJAMIENTO/complementaryservicefoodtype.service';
import { ComplementaryServiceFoodType } from './../../../../models/ALOJAMIENTO/ComplementaryServiceFoodType';

@Component({
   selector: 'app-complementaryservicefoodtype',
   templateUrl: './complementaryservicefoodtype.component.html',
   styleUrls: ['./complementaryservicefoodtype.component.scss']
})
export class ComplementaryServiceFoodTypeComponent implements OnInit {
   complementary_service_food_types: ComplementaryServiceFoodType[] = [];
   complementary_service_food_typeSelected: ComplementaryServiceFoodType = new ComplementaryServiceFoodType();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private complementary_service_food_typeDataService: ComplementaryServiceFoodTypeService) {}

   ngOnInit() {
      this.goToPage(1);
   }

   selectComplementaryServiceFoodType(complementary_service_food_type: ComplementaryServiceFoodType) {
      this.complementary_service_food_typeSelected = complementary_service_food_type;
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getComplementaryServiceFoodTypes();
   }

   getComplementaryServiceFoodTypes() {
      this.complementary_service_food_types = [];
      this.complementary_service_food_typeSelected = new ComplementaryServiceFoodType();
      this.complementary_service_food_typeDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.complementary_service_food_types = r.data as ComplementaryServiceFoodType[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newComplementaryServiceFoodType(content) {
      this.complementary_service_food_typeSelected = new ComplementaryServiceFoodType();
      this.openDialog(content);
   }

   editComplementaryServiceFoodType(content) {
      if (typeof this.complementary_service_food_typeSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteComplementaryServiceFoodType() {
      if (typeof this.complementary_service_food_typeSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.complementary_service_food_typeDataService.delete(this.complementary_service_food_typeSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getComplementaryServiceFoodTypes();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.complementary_service_food_typeDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_ComplementaryServiceFoodTypes.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.complementary_service_food_typeDataService.get().then( r => {
         const backupData = r as ComplementaryServiceFoodType[];
         let output = 'id;name\n';
         backupData.forEach(element => {
            output += element.id + ';' + element.name + '\n';
         });
         const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_ComplementaryServiceFoodTypes.csv');
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
            this.complementary_service_food_typeDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.complementary_service_food_typeSelected.id === 'undefined') {
               this.complementary_service_food_typeDataService.post(this.complementary_service_food_typeSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getComplementaryServiceFoodTypes();
               }).catch( e => console.log(e) );
            } else {
               this.complementary_service_food_typeDataService.put(this.complementary_service_food_typeSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getComplementaryServiceFoodTypes();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}