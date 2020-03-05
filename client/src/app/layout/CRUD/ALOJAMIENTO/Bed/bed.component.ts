import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { BedService } from './../../../../services/CRUD/ALOJAMIENTO/bed.service';
import { Bed } from './../../../../models/ALOJAMIENTO/Bed';
import { BedTypeService } from './../../../../services/CRUD/ALOJAMIENTO/bedtype.service';
import { BedType } from './../../../../models/ALOJAMIENTO/BedType';


@Component({
   selector: 'app-bed',
   templateUrl: './bed.component.html',
   styleUrls: ['./bed.component.scss']
})
export class BedComponent implements OnInit {
   beds: Bed[] = [];
   bedSelected: Bed = new Bed();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   bed_types: BedType[] = [];
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private bed_typeDataService: BedTypeService,
               private bedDataService: BedService) {}

   ngOnInit() {
      this.goToPage(1);
      this.getBedType();
   }

   selectBed(bed: Bed) {
      this.bedSelected = bed;
   }

   getBedType() {
      this.bed_types = [];
      this.bed_typeDataService.get().then( r => {
         this.bed_types = r as BedType[];
      }).catch( e => console.log(e) );
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getBeds();
   }

   getBeds() {
      this.beds = [];
      this.bedSelected = new Bed();
      this.bedSelected.bed_type_id = 0;
      this.bedDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.beds = r.data as Bed[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newBed(content) {
      this.bedSelected = new Bed();
      this.bedSelected.bed_type_id = 0;
      this.openDialog(content);
   }

   editBed(content) {
      if (typeof this.bedSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteBed() {
      if (typeof this.bedSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.bedDataService.delete(this.bedSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getBeds();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.bedDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_Beds.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.bedDataService.get().then( r => {
         const backupData = r as Bed[];
         let output = 'id;quantity;bed_type_id\n';
         backupData.forEach(element => {
            output += element.id + ';' + element.quantity + ';' + element.bed_type_id + '\n';
         });
         const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_Beds.csv');
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
            this.bedDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.bedSelected.id === 'undefined') {
               this.bedDataService.post(this.bedSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getBeds();
               }).catch( e => console.log(e) );
            } else {
               this.bedDataService.put(this.bedSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getBeds();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}