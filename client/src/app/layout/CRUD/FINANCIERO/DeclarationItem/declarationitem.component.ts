import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { DeclarationItemService } from './../../../../services/CRUD/FINANCIERO/declarationitem.service';
import { DeclarationItem } from './../../../../models/FINANCIERO/DeclarationItem';
import { DeclarationItemCategoryService } from './../../../../services/CRUD/FINANCIERO/declarationitemcategory.service';
import { DeclarationItemCategory } from './../../../../models/FINANCIERO/DeclarationItemCategory';


@Component({
   selector: 'app-declarationitem',
   templateUrl: './declarationitem.component.html',
   styleUrls: ['./declarationitem.component.scss']
})
export class DeclarationItemComponent implements OnInit {
   declaration_items: DeclarationItem[] = [];
   declaration_itemSelected: DeclarationItem = new DeclarationItem();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   declaration_item_categories: DeclarationItemCategory[] = [];
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private declaration_item_categoryDataService: DeclarationItemCategoryService,
               private declaration_itemDataService: DeclarationItemService) {}

   ngOnInit() {
      this.goToPage(1);
      this.getDeclarationItemCategory();
   }

   selectDeclarationItem(declaration_item: DeclarationItem) {
      this.declaration_itemSelected = declaration_item;
   }

   getDeclarationItemCategory() {
      this.declaration_item_categories = [];
      this.declaration_item_categoryDataService.get().then( r => {
         this.declaration_item_categories = r as DeclarationItemCategory[];
      }).catch( e => console.log(e) );
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getDeclarationItems();
   }

   getDeclarationItems() {
      this.declaration_items = [];
      this.declaration_itemSelected = new DeclarationItem();
      this.declaration_itemSelected.declaration_item_category_id = 0;
      this.declaration_itemDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.declaration_items = r.data as DeclarationItem[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newDeclarationItem(content) {
      this.declaration_itemSelected = new DeclarationItem();
      this.declaration_itemSelected.declaration_item_category_id = 0;
      this.openDialog(content);
   }

   editDeclarationItem(content) {
      if (typeof this.declaration_itemSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteDeclarationItem() {
      if (typeof this.declaration_itemSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.declaration_itemDataService.delete(this.declaration_itemSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getDeclarationItems();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.declaration_itemDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_DeclarationItems.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.declaration_itemDataService.get().then( r => {
         const backupData = r as DeclarationItem[];
         let output = 'id;name;description;factor;year;tax_payer_type_id;declaration_item_category_id\n';
         backupData.forEach(element => {
            output += element.id + ';' + element.name + ';' + element.description + ';' + element.factor + ';' + element.year + ';' + element.tax_payer_type_id + ';' + element.declaration_item_category_id + '\n';
         });
         const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_DeclarationItems.csv');
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
            this.declaration_itemDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true , size: 'lg' }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.declaration_itemSelected.id === 'undefined') {
               this.declaration_itemDataService.post(this.declaration_itemSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getDeclarationItems();
               }).catch( e => console.log(e) );
            } else {
               this.declaration_itemDataService.put(this.declaration_itemSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getDeclarationItems();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}