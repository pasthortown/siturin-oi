import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { ComplementaryServiceFoodService } from './../../../../services/CRUD/ALOJAMIENTO/complementaryservicefood.service';
import { ComplementaryServiceFood } from './../../../../models/ALOJAMIENTO/ComplementaryServiceFood';
import { ComplementaryServiceFoodTypeService } from './../../../../services/CRUD/ALOJAMIENTO/complementaryservicefoodtype.service';
import { ComplementaryServiceFoodType } from './../../../../models/ALOJAMIENTO/ComplementaryServiceFoodType';


@Component({
   selector: 'app-complementaryservicefood',
   templateUrl: './complementaryservicefood.component.html',
   styleUrls: ['./complementaryservicefood.component.scss']
})
export class ComplementaryServiceFoodComponent implements OnInit {
   complementary_service_foods: ComplementaryServiceFood[] = [];
   complementary_service_foodSelected: ComplementaryServiceFood = new ComplementaryServiceFood();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   complementary_service_food_types: ComplementaryServiceFoodType[] = [];
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private complementary_service_food_typeDataService: ComplementaryServiceFoodTypeService,
               private complementary_service_foodDataService: ComplementaryServiceFoodService) {}

   ngOnInit() {
      this.goToPage(1);
      this.getComplementaryServiceFoodType();
   }

   selectComplementaryServiceFood(complementary_service_food: ComplementaryServiceFood) {
      this.complementary_service_foodSelected = complementary_service_food;
   }

   getComplementaryServiceFoodType() {
      this.complementary_service_food_types = [];
      this.complementary_service_food_typeDataService.get().then( r => {
         this.complementary_service_food_types = r as ComplementaryServiceFoodType[];
      }).catch( e => console.log(e) );
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getComplementaryServiceFoods();
   }

   getComplementaryServiceFoods() {
      this.complementary_service_foods = [];
      this.complementary_service_foodSelected = new ComplementaryServiceFood();
      this.complementary_service_foodSelected.complementary_service_food_type_id = 0;
      this.complementary_service_foodDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.complementary_service_foods = r.data as ComplementaryServiceFood[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newComplementaryServiceFood(content) {
      this.complementary_service_foodSelected = new ComplementaryServiceFood();
      this.complementary_service_foodSelected.complementary_service_food_type_id = 0;
      this.openDialog(content);
   }

   editComplementaryServiceFood(content) {
      if (typeof this.complementary_service_foodSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteComplementaryServiceFood() {
      if (typeof this.complementary_service_foodSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.complementary_service_foodDataService.delete(this.complementary_service_foodSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getComplementaryServiceFoods();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.complementary_service_foodDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_ComplementaryServiceFoods.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.complementary_service_foodDataService.get().then( r => {
         const backupData = r as ComplementaryServiceFood[];
         let output = 'id;quantity_tables;quantity_chairs;complementary_service_food_type_id\n';
         backupData.forEach(element => {
            output += element.id + ';' + element.quantity_tables + ';' + element.quantity_chairs + ';' + element.complementary_service_food_type_id + '\n';
         });
         const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_ComplementaryServiceFoods.csv');
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
            this.complementary_service_foodDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.complementary_service_foodSelected.id === 'undefined') {
               this.complementary_service_foodDataService.post(this.complementary_service_foodSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getComplementaryServiceFoods();
               }).catch( e => console.log(e) );
            } else {
               this.complementary_service_foodDataService.put(this.complementary_service_foodSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getComplementaryServiceFoods();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}