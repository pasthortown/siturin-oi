import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { KitchenTypeService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/kitchentype.service';
import { KitchenType } from './../../../../models/ALIMENTOSBEBIDAS/KitchenType';
import { RegisterTypeService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/registertype.service';
import { RegisterType } from './../../../../models/ALIMENTOSBEBIDAS/RegisterType';


@Component({
   selector: 'app-kitchentype',
   templateUrl: './kitchentype.component.html',
   styleUrls: ['./kitchentype.component.scss']
})
export class KitchenTypeComponent implements OnInit {
   kitchen_types: KitchenType[] = [];
   kitchen_typeSelected: KitchenType = new KitchenType();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   register_types: RegisterType[] = [];
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private register_typeDataService: RegisterTypeService,
               private kitchen_typeDataService: KitchenTypeService) {}

   ngOnInit() {
      this.goToPage(1);
      this.getRegisterType();
   }

   selectKitchenType(kitchen_type: KitchenType) {
      this.kitchen_typeSelected = kitchen_type;
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
      this.getKitchenTypes();
   }

   getKitchenTypes() {
      this.kitchen_types = [];
      this.kitchen_typeSelected = new KitchenType();
      this.kitchen_typeSelected.register_type_id = 0;
      this.kitchen_typeDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.kitchen_types = r.data as KitchenType[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newKitchenType(content) {
      this.kitchen_typeSelected = new KitchenType();
      this.kitchen_typeSelected.register_type_id = 0;
      this.openDialog(content);
   }

   editKitchenType(content) {
      if (typeof this.kitchen_typeSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteKitchenType() {
      if (typeof this.kitchen_typeSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.kitchen_typeDataService.delete(this.kitchen_typeSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getKitchenTypes();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.kitchen_typeDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_KitchenTypes.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.kitchen_typeDataService.get().then( r => {
         const backupData = r as KitchenType[];
         let output = 'id;description;register_type_id\n';
         backupData.forEach(element => {
            output += element.id; + element.description + ';' + element.register_type_id + '\n';
         });
         const blob = new Blob([output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_KitchenTypes.csv');
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
            this.kitchen_typeDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.kitchen_typeSelected.id === 'undefined') {
               this.kitchen_typeDataService.post(this.kitchen_typeSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getKitchenTypes();
               }).catch( e => console.log(e) );
            } else {
               this.kitchen_typeDataService.put(this.kitchen_typeSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getKitchenTypes();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}