import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { PayService } from './../../../../services/CRUD/FINANCIERO/pay.service';
import { Pay } from './../../../../models/FINANCIERO/Pay';

@Component({
   selector: 'app-pay',
   templateUrl: './pay.component.html',
   styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {
   pays: Pay[] = [];
   paySelected: Pay = new Pay();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private payDataService: PayService) {}

   ngOnInit() {
      this.goToPage(1);
   }

   selectPay(pay: Pay) {
      this.paySelected = pay;
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getPays();
   }

   getPays() {
      this.pays = [];
      this.paySelected = new Pay();
      this.payDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.pays = r.data as Pay[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newPay(content) {
      this.paySelected = new Pay();
      this.openDialog(content);
   }

   editPay(content) {
      if (typeof this.paySelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deletePay() {
      if (typeof this.paySelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.payDataService.delete(this.paySelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getPays();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.payDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_Pays.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.payDataService.get().then( r => {
         const backupData = r as Pay[];
         let output = 'id;amount_payed;amount_to_pay;pay_date;payed;code;max_pay_date;ruc_id;amount_to_pay_taxes;amount_to_pay_base;amount_to_pay_fines;notes\n';
         backupData.forEach(element => {
            output += element.id + ';' + element.amount_payed + ';' + element.amount_to_pay + ';' + element.pay_date + ';' + element.payed + ';' + element.code + ';' + element.max_pay_date + ';' + element.ruc_id + ';' + element.amount_to_pay_taxes + ';' + element.amount_to_pay_base + ';' + element.amount_to_pay_fines + ';' + element.notes + '\n';
         });
         const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_Pays.csv');
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
            this.payDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true , size: 'lg' }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.paySelected.id === 'undefined') {
               this.payDataService.post(this.paySelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getPays();
               }).catch( e => console.log(e) );
            } else {
               this.payDataService.put(this.paySelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getPays();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}