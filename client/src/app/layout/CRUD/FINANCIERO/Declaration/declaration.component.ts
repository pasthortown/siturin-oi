import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { DeclarationService } from './../../../../services/CRUD/FINANCIERO/declaration.service';
import { Declaration } from './../../../../models/FINANCIERO/Declaration';
import { DeclarationItemValueService } from './../../../../services/CRUD/FINANCIERO/declarationitemvalue.service';
import { DeclarationItemValue } from './../../../../models/FINANCIERO/DeclarationItemValue';


@Component({
   selector: 'app-declaration',
   templateUrl: './declaration.component.html',
   styleUrls: ['./declaration.component.scss']
})
export class DeclarationComponent implements OnInit {
   declarations: Declaration[] = [];
   declarationSelected: Declaration = new Declaration();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   declaration_item_values: DeclarationItemValue[] = [];
   declaration_item_values_declarationSelectedId: number;
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private declaration_item_valueDataService: DeclarationItemValueService,
               private declarationDataService: DeclarationService) {}

   ngOnInit() {
      this.goToPage(1);
      this.getDeclarationItemValue();
   }

   selectDeclaration(declaration: Declaration) {
      this.declarationSelected = declaration;
   }

   getDeclarationItemValue() {
      this.declaration_item_values = [];
      this.declaration_item_valueDataService.get().then( r => {
         this.declaration_item_values = r as DeclarationItemValue[];
      }).catch( e => console.log(e) );
   }

   getDeclarationItemValuesOnDeclaration() {
      this.declarationSelected.declaration_item_values_on_declaration = [];
      this.declarationDataService.get(this.declarationSelected.id).then( r => {
         this.declarationSelected.declaration_item_values_on_declaration = r.attach[0].declaration_item_values_on_declaration as DeclarationItemValue[];
      }).catch( e => console.log(e) );
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getDeclarations();
   }

   getDeclarations() {
      this.declarations = [];
      this.declarationSelected = new Declaration();
      this.declaration_item_values_declarationSelectedId = 0;
      this.declarationDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.declarations = r.data as Declaration[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newDeclaration(content) {
      this.declarationSelected = new Declaration();
      this.declaration_item_values_declarationSelectedId = 0;
      this.openDialog(content);
   }

   editDeclaration(content) {
      if ( typeof this.declarationSelected.declaration_item_values_on_declaration === 'undefined' ) {
         this.declarationSelected.declaration_item_values_on_declaration = [];
      }
      if (typeof this.declarationSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.getDeclarationItemValuesOnDeclaration();
      this.declaration_item_values_declarationSelectedId = 0;
      this.openDialog(content);
   }

   deleteDeclaration() {
      if (typeof this.declarationSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.declarationDataService.delete(this.declarationSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getDeclarations();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.declarationDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_Declarations.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.declarationDataService.get().then( r => {
         const backupData = r as Declaration[];
         let output = 'id;establishment_id;declaration_date;year;max_date_to_pay\n';
         backupData.forEach(element => {
            output += element.id + ';' + element.establishment_id + ';' + element.declaration_date + ';' + element.year + ';' + element.max_date_to_pay + '\n';
         });
         const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_Declarations.csv');
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
            this.declarationDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   selectDeclarationItemValue(declaration_item_value: DeclarationItemValue) {
      this.declaration_item_values_declarationSelectedId = declaration_item_value.id;
   }

   addDeclarationItemValue() {
      if (this.declaration_item_values_declarationSelectedId === 0) {
         this.toastr.errorToastr('Seleccione un registro.', 'Error');
         return;
      }
      this.declaration_item_values.forEach(declaration_item_value => {
         if (declaration_item_value.id == this.declaration_item_values_declarationSelectedId) {
            let existe = false;
            this.declarationSelected.declaration_item_values_on_declaration.forEach(element => {
               if (element.id == declaration_item_value.id) {
                  existe = true;
               }
            });
            if (!existe) {
               this.declarationSelected.declaration_item_values_on_declaration.push(declaration_item_value);
               this.declaration_item_values_declarationSelectedId = 0;
            } else {
               this.toastr.errorToastr('El registro ya existe.', 'Error');
            }
         }
      });
   }

   removeDeclarationItemValue() {
      if (this.declaration_item_values_declarationSelectedId === 0) {
         this.toastr.errorToastr('Seleccione un registro.', 'Error');
         return;
      }
      const newDeclarationItemValues: DeclarationItemValue[] = [];
      let eliminado = false;
      this.declarationSelected.declaration_item_values_on_declaration.forEach(declaration_item_value => {
         if (declaration_item_value.id !== this.declaration_item_values_declarationSelectedId) {
            newDeclarationItemValues.push(declaration_item_value);
         } else {
            eliminado = true;
         }
      });
      if (!eliminado) {
         this.toastr.errorToastr('Registro no encontrado.', 'Error');
         return;
      }
      this.declarationSelected.declaration_item_values_on_declaration = newDeclarationItemValues;
      this.declaration_item_values_declarationSelectedId = 0;
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.declarationSelected.id === 'undefined') {
               this.declarationDataService.post(this.declarationSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getDeclarations();
               }).catch( e => console.log(e) );
            } else {
               this.declarationDataService.put(this.declarationSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getDeclarations();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}