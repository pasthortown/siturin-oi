import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { PayTaxService } from './../../../../services/CRUD/FINANCIERO/paytax.service';
import { PayTax } from './../../../../models/FINANCIERO/PayTax';

@Component({
   selector: 'app-paytax',
   templateUrl: './paytax.component.html',
   styleUrls: ['./paytax.component.scss']
})
export class PayTaxComponent implements OnInit {
   pay_taxes: PayTax[] = [];
   pay_taxSelected: PayTax = new PayTax();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private pay_taxDataService: PayTaxService) {}

   ngOnInit() {
      this.goToPage(1);
   }

   selectPayTax(pay_tax: PayTax) {
      this.pay_taxSelected = pay_tax;
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getPayTaxes();
   }

   getPayTaxes() {
      this.pay_taxes = [];
      this.pay_taxSelected = new PayTax();
      this.pay_taxDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.pay_taxes = r.data as PayTax[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newPayTax(content) {
      this.pay_taxSelected = new PayTax();
      this.openDialog(content);
   }

   editPayTax(content) {
      if (typeof this.pay_taxSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deletePayTax() {
      if (typeof this.pay_taxSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.pay_taxDataService.delete(this.pay_taxSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getPayTaxes();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.pay_taxDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_PayTaxes.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.pay_taxDataService.get().then( r => {
         const backupData = r as PayTax[];
         let output = 'id;year;trimester;value\n';
         backupData.forEach(element => {
            output += element.id; + element.year + ';' + element.trimester + ';' + element.value + '\n';
         });
         const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_PayTaxes.csv');
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
            this.pay_taxDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.pay_taxSelected.id === 'undefined' || this.pay_taxSelected.id === 0) {
               this.pay_taxDataService.post(this.pay_taxSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getPayTaxes();
               }).catch( e => console.log(e) );
            } else {
               this.pay_taxDataService.put(this.pay_taxSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getPayTaxes();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}