import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { TaxPayerTypeService } from './../../../../services/CRUD/BASE/taxpayertype.service';
import { TaxPayerType } from './../../../../models/BASE/TaxPayerType';

@Component({
   selector: 'app-taxpayertype',
   templateUrl: './taxpayertype.component.html',
   styleUrls: ['./taxpayertype.component.scss']
})
export class TaxPayerTypeComponent implements OnInit {
   tax_payer_types: TaxPayerType[] = [];
   tax_payer_typeSelected: TaxPayerType = new TaxPayerType();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private tax_payer_typeDataService: TaxPayerTypeService) {}

   ngOnInit() {
      this.goToPage(1);
   }

   selectTaxPayerType(tax_payer_type: TaxPayerType) {
      this.tax_payer_typeSelected = tax_payer_type;
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getTaxPayerTypes();
   }

   getTaxPayerTypes() {
      this.tax_payer_types = [];
      this.tax_payer_typeSelected = new TaxPayerType();
      this.tax_payer_typeDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.tax_payer_types = r.data as TaxPayerType[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newTaxPayerType(content) {
      this.tax_payer_typeSelected = new TaxPayerType();
      this.openDialog(content);
   }

   editTaxPayerType(content) {
      if (typeof this.tax_payer_typeSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteTaxPayerType() {
      if (typeof this.tax_payer_typeSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.tax_payer_typeDataService.delete(this.tax_payer_typeSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getTaxPayerTypes();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.tax_payer_typeDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_TaxPayerTypes.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.tax_payer_typeDataService.get().then( r => {
         const backupData = r as TaxPayerType[];
         let output = 'id;name;description\n';
         backupData.forEach(element => {
            output += element.id + ';' + element.name + ';' + element.description + '\n';
         });
         const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_TaxPayerTypes.csv');
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
            this.tax_payer_typeDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true , size: 'lg' }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.tax_payer_typeSelected.id === 'undefined') {
               this.tax_payer_typeDataService.post(this.tax_payer_typeSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getTaxPayerTypes();
               }).catch( e => console.log(e) );
            } else {
               this.tax_payer_typeDataService.put(this.tax_payer_typeSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getTaxPayerTypes();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}