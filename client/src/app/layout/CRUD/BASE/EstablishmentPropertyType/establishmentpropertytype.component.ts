import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { EstablishmentPropertyTypeService } from './../../../../services/CRUD/BASE/establishmentpropertytype.service';
import { EstablishmentPropertyType } from './../../../../models/BASE/EstablishmentPropertyType';

@Component({
   selector: 'app-establishmentpropertytype',
   templateUrl: './establishmentpropertytype.component.html',
   styleUrls: ['./establishmentpropertytype.component.scss']
})
export class EstablishmentPropertyTypeComponent implements OnInit {
   establishment_property_types: EstablishmentPropertyType[] = [];
   establishment_property_typeSelected: EstablishmentPropertyType = new EstablishmentPropertyType();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private establishment_property_typeDataService: EstablishmentPropertyTypeService) {}

   ngOnInit() {
      this.goToPage(1);
   }

   selectEstablishmentPropertyType(establishment_property_type: EstablishmentPropertyType) {
      this.establishment_property_typeSelected = establishment_property_type;
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getEstablishmentPropertyTypes();
   }

   getEstablishmentPropertyTypes() {
      this.establishment_property_types = [];
      this.establishment_property_typeSelected = new EstablishmentPropertyType();
      this.establishment_property_typeDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.establishment_property_types = r.data as EstablishmentPropertyType[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newEstablishmentPropertyType(content) {
      this.establishment_property_typeSelected = new EstablishmentPropertyType();
      this.openDialog(content);
   }

   editEstablishmentPropertyType(content) {
      if (typeof this.establishment_property_typeSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteEstablishmentPropertyType() {
      if (typeof this.establishment_property_typeSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.establishment_property_typeDataService.delete(this.establishment_property_typeSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getEstablishmentPropertyTypes();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.establishment_property_typeDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_EstablishmentPropertyTypes.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.establishment_property_typeDataService.get().then( r => {
         const backupData = r as EstablishmentPropertyType[];
         let output = 'id;name\n';
         backupData.forEach(element => {
            output += element.id + ';' + element.name + '\n';
         });
         const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_EstablishmentPropertyTypes.csv');
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
            this.establishment_property_typeDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.establishment_property_typeSelected.id === 'undefined') {
               this.establishment_property_typeDataService.post(this.establishment_property_typeSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getEstablishmentPropertyTypes();
               }).catch( e => console.log(e) );
            } else {
               this.establishment_property_typeDataService.put(this.establishment_property_typeSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getEstablishmentPropertyTypes();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}