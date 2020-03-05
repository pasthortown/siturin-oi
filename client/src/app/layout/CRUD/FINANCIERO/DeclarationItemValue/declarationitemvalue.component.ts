import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { DeclarationItemValueService } from './../../../../services/CRUD/FINANCIERO/declarationitemvalue.service';
import { DeclarationItemValue } from './../../../../models/FINANCIERO/DeclarationItemValue';
import { DeclarationItemService } from './../../../../services/CRUD/FINANCIERO/declarationitem.service';
import { DeclarationItem } from './../../../../models/FINANCIERO/DeclarationItem';


@Component({
   selector: 'app-declarationitemvalue',
   templateUrl: './declarationitemvalue.component.html',
   styleUrls: ['./declarationitemvalue.component.scss']
})
export class DeclarationItemValueComponent implements OnInit {
   declaration_item_values: DeclarationItemValue[] = [];
   declaration_item_valueSelected: DeclarationItemValue = new DeclarationItemValue();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   declaration_items: DeclarationItem[] = [];
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private declaration_itemDataService: DeclarationItemService,
               private declaration_item_valueDataService: DeclarationItemValueService) {}

   ngOnInit() {
      this.goToPage(1);
      this.getDeclarationItem();
   }

   selectDeclarationItemValue(declaration_item_value: DeclarationItemValue) {
      this.declaration_item_valueSelected = declaration_item_value;
   }

   getDeclarationItem() {
      this.declaration_items = [];
      this.declaration_itemDataService.get().then( r => {
         this.declaration_items = r as DeclarationItem[];
      }).catch( e => console.log(e) );
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getDeclarationItemValues();
   }

   getDeclarationItemValues() {
      this.declaration_item_values = [];
      this.declaration_item_valueSelected = new DeclarationItemValue();
      this.declaration_item_valueSelected.declaration_item_id = 0;
      this.declaration_item_valueDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.declaration_item_values = r.data as DeclarationItemValue[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newDeclarationItemValue(content) {
      this.declaration_item_valueSelected = new DeclarationItemValue();
      this.declaration_item_valueSelected.declaration_item_id = 0;
      this.openDialog(content);
   }

   editDeclarationItemValue(content) {
      if (typeof this.declaration_item_valueSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteDeclarationItemValue() {
      if (typeof this.declaration_item_valueSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.declaration_item_valueDataService.delete(this.declaration_item_valueSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getDeclarationItemValues();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.declaration_item_valueDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_DeclarationItemValues.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.declaration_item_valueDataService.get().then( r => {
         const backupData = r as DeclarationItemValue[];
         let output = 'id;value;declaration_item_id\n';
         backupData.forEach(element => {
            output += element.id + ';' + element.value + ';' + element.declaration_item_id + '\n';
         });
         const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_DeclarationItemValues.csv');
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
            this.declaration_item_valueDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.declaration_item_valueSelected.id === 'undefined') {
               this.declaration_item_valueDataService.post(this.declaration_item_valueSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getDeclarationItemValues();
               }).catch( e => console.log(e) );
            } else {
               this.declaration_item_valueDataService.put(this.declaration_item_valueSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getDeclarationItemValues();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}