import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { DeclarationItemCategoryService } from './../../../../services/CRUD/FINANCIERO/declarationitemcategory.service';
import { DeclarationItemCategory } from './../../../../models/FINANCIERO/DeclarationItemCategory';

@Component({
   selector: 'app-declarationitemcategory',
   templateUrl: './declarationitemcategory.component.html',
   styleUrls: ['./declarationitemcategory.component.scss']
})
export class DeclarationItemCategoryComponent implements OnInit {
   declaration_item_categories: DeclarationItemCategory[] = [];
   declaration_item_categorySelected: DeclarationItemCategory = new DeclarationItemCategory();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private declaration_item_categoryDataService: DeclarationItemCategoryService) {}

   ngOnInit() {
      this.goToPage(1);
   }

   selectDeclarationItemCategory(declaration_item_category: DeclarationItemCategory) {
      this.declaration_item_categorySelected = declaration_item_category;
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getDeclarationItemCategories();
   }

   getDeclarationItemCategories() {
      this.declaration_item_categories = [];
      this.declaration_item_categorySelected = new DeclarationItemCategory();
      this.declaration_item_categoryDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.declaration_item_categories = r.data as DeclarationItemCategory[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newDeclarationItemCategory(content) {
      this.declaration_item_categorySelected = new DeclarationItemCategory();
      this.openDialog(content);
   }

   editDeclarationItemCategory(content) {
      if (typeof this.declaration_item_categorySelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteDeclarationItemCategory() {
      if (typeof this.declaration_item_categorySelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.declaration_item_categoryDataService.delete(this.declaration_item_categorySelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getDeclarationItemCategories();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.declaration_item_categoryDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_DeclarationItemCategories.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.declaration_item_categoryDataService.get().then( r => {
         const backupData = r as DeclarationItemCategory[];
         let output = 'id;name;description;year;tax_payer_type_id\n';
         backupData.forEach(element => {
            output += element.id + ';' + element.name + ';' + element.description + ';' + element.year + ';' + element.tax_payer_type_id + '\n';
         });
         const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_DeclarationItemCategories.csv');
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
            this.declaration_item_categoryDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true , size: 'lg' }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.declaration_item_categorySelected.id === 'undefined') {
               this.declaration_item_categoryDataService.post(this.declaration_item_categorySelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getDeclarationItemCategories();
               }).catch( e => console.log(e) );
            } else {
               this.declaration_item_categoryDataService.put(this.declaration_item_categorySelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getDeclarationItemCategories();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}