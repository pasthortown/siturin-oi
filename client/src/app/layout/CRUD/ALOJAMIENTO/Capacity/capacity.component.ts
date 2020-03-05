import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { CapacityService } from './../../../../services/CRUD/ALOJAMIENTO/capacity.service';
import { Capacity } from './../../../../models/ALOJAMIENTO/Capacity';
import { BedService } from './../../../../services/CRUD/ALOJAMIENTO/bed.service';
import { Bed } from './../../../../models/ALOJAMIENTO/Bed';

import { CapacityTypeService } from './../../../../services/CRUD/ALOJAMIENTO/capacitytype.service';
import { CapacityType } from './../../../../models/ALOJAMIENTO/CapacityType';


@Component({
   selector: 'app-capacity',
   templateUrl: './capacity.component.html',
   styleUrls: ['./capacity.component.scss']
})
export class CapacityComponent implements OnInit {
   capacities: Capacity[] = [];
   capacitySelected: Capacity = new Capacity();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   beds: Bed[] = [];
   beds_capacitySelectedId: number;
   capacity_types: CapacityType[] = [];
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private bedDataService: BedService,
               private capacity_typeDataService: CapacityTypeService,
               private capacityDataService: CapacityService) {}

   ngOnInit() {
      this.goToPage(1);
      this.getBed();
      this.getCapacityType();
   }

   selectCapacity(capacity: Capacity) {
      this.capacitySelected = capacity;
   }

   getBed() {
      this.beds = [];
      this.bedDataService.get().then( r => {
         this.beds = r as Bed[];
      }).catch( e => console.log(e) );
   }

   getBedsOnCapacity() {
      this.capacitySelected.beds_on_capacity = [];
      this.capacityDataService.get(this.capacitySelected.id).then( r => {
         this.capacitySelected.beds_on_capacity = r.attach[0].beds_on_capacity as Bed[];
      }).catch( e => console.log(e) );
   }

   getCapacityType() {
      this.capacity_types = [];
      this.capacity_typeDataService.get().then( r => {
         this.capacity_types = r as CapacityType[];
      }).catch( e => console.log(e) );
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getCapacities();
   }

   getCapacities() {
      this.capacities = [];
      this.capacitySelected = new Capacity();
      this.beds_capacitySelectedId = 0;
      this.capacitySelected.capacity_type_id = 0;
      this.capacityDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.capacities = r.data as Capacity[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newCapacity(content) {
      this.capacitySelected = new Capacity();
      this.beds_capacitySelectedId = 0;
      this.capacitySelected.capacity_type_id = 0;
      this.openDialog(content);
   }

   editCapacity(content) {
      if ( typeof this.capacitySelected.beds_on_capacity === 'undefined' ) {
         this.capacitySelected.beds_on_capacity = [];
      }
      if (typeof this.capacitySelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.getBedsOnCapacity();
      this.beds_capacitySelectedId = 0;
      this.openDialog(content);
   }

   deleteCapacity() {
      if (typeof this.capacitySelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.capacityDataService.delete(this.capacitySelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getCapacities();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.capacityDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_Capacities.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.capacityDataService.get().then( r => {
         const backupData = r as Capacity[];
         let output = 'id;quantity;max_beds;max_spaces;year;capacity_type_id\n';
         backupData.forEach(element => {
            output += element.id; + element.quantity + ';' + element.max_beds + ';' + element.max_spaces + ';' + element.year + ';' + element.capacity_type_id + '\n';
         });
         const blob = new Blob([output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_Capacities.csv');
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
            this.capacityDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   selectBed(bed: Bed) {
      this.beds_capacitySelectedId = bed.id;
   }

   addBed() {
      if (this.beds_capacitySelectedId === 0) {
         this.toastr.errorToastr('Seleccione un registro.', 'Error');
         return;
      }
      this.beds.forEach(bed => {
         if (bed.id == this.beds_capacitySelectedId) {
            let existe = false;
            this.capacitySelected.beds_on_capacity.forEach(element => {
               if (element.id == bed.id) {
                  existe = true;
               }
            });
            if (!existe) {
               this.capacitySelected.beds_on_capacity.push(bed);
               this.beds_capacitySelectedId = 0;
            } else {
               this.toastr.errorToastr('El registro ya existe.', 'Error');
            }
         }
      });
   }

   removeBed() {
      if (this.beds_capacitySelectedId === 0) {
         this.toastr.errorToastr('Seleccione un registro.', 'Error');
         return;
      }
      const newBeds: Bed[] = [];
      let eliminado = false;
      this.capacitySelected.beds_on_capacity.forEach(bed => {
         if (bed.id !== this.beds_capacitySelectedId) {
            newBeds.push(bed);
         } else {
            eliminado = true;
         }
      });
      if (!eliminado) {
         this.toastr.errorToastr('Registro no encontrado.', 'Error');
         return;
      }
      this.capacitySelected.beds_on_capacity = newBeds;
      this.beds_capacitySelectedId = 0;
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.capacitySelected.id === 'undefined') {
               this.capacityDataService.post(this.capacitySelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getCapacities();
               }).catch( e => console.log(e) );
            } else {
               this.capacityDataService.put(this.capacitySelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getCapacities();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}