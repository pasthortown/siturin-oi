import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { TariffTypeService } from './../../../../services/CRUD/ALOJAMIENTO/tarifftype.service';
import { TariffType } from './../../../../models/ALOJAMIENTO/TariffType';

@Component({
   selector: 'app-tarifftype',
   templateUrl: './tarifftype.component.html',
   styleUrls: ['./tarifftype.component.scss']
})
export class TariffTypeComponent implements OnInit {
   tariff_types: TariffType[] = [];
   tariff_typeSelected: TariffType = new TariffType();
   all_tariff_types: TariffType[] = [];
   father_tariff_types: TariffType[] = [];
   filter_tariff_type_father = 'all';
   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private tariff_typeDataService: TariffTypeService) {}

   ngOnInit() {
      this.refresh();
   }

   refresh() {
      this.getFatherTariffTypes();
      this.goToPage(this.currentPage);
   }

   getFatherTariffTypes() {
      this.father_tariff_types = [];
      this.tariff_typeDataService.get().then( r => {
         this.all_tariff_types = r as TariffType[];
         const response = r as TariffType[];
         response.forEach(e1 => {
            let isFather = false;
            if(e1.father_code === '-') {
               isFather = true;
            }
            this.all_tariff_types.forEach(e2 => {
               if(e2.father_code === e1.code) {
                  isFather = true;
               }
            });
            if(isFather) {
               this.father_tariff_types.push(e1);
            }
         });
      }).catch( e => console.log(e) );
   }

   buildCode(fatherCode: String) {
      let count = 1;
      this.all_tariff_types.forEach(element => {
         if(element.father_code === fatherCode) {
            count++;
         }
      });
      if(fatherCode === '-'){
         return count.toString();
      }
      return fatherCode + '.' + count.toString();
   }

   selectTariffType(tariff_type: TariffType) {
      this.tariff_typeSelected = tariff_type;
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getTariffTypes();
   }

   getTariffTypes() {
      this.tariff_types = [];
      this.tariff_typeSelected = new TariffType();
      this.tariff_typeDataService.get_filtered_paginate(this.recordsByPage, this.currentPage, this.filter_tariff_type_father).then( r => {
         this.tariff_types = r.data as TariffType[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newTariffType(content) {
      this.tariff_typeSelected = new TariffType();
      this.openDialog(content);
   }

   editTariffType(content) {
      if (typeof this.tariff_typeSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteTariffType() {
      if (typeof this.tariff_typeSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.tariff_typeDataService.delete(this.tariff_typeSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.refresh();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.tariff_typeDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_TariffTypes.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.tariff_typeDataService.get().then( r => {
         const backupData = r as TariffType[];
         let output = 'id;name;code;father_code\n';
         backupData.forEach(element => {
            output += element.id + ';' + element.name + ';' + element.code + ';' + element.father_code + '\n';
         });
         const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_TariffTypes.csv');
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
            this.tariff_typeDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.tariff_typeSelected.id === 'undefined') {
               this.tariff_typeDataService.post(this.tariff_typeSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.refresh();
               }).catch( e => console.log(e) );
            } else {
               this.tariff_typeDataService.put(this.tariff_typeSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.refresh();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}