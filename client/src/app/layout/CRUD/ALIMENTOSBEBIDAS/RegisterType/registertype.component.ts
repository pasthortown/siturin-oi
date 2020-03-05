import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { RegisterTypeService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/registertype.service';
import { RegisterType } from './../../../../models/ALIMENTOSBEBIDAS/RegisterType';

@Component({
   selector: 'app-registertype',
   templateUrl: './registertype.component.html',
   styleUrls: ['./registertype.component.scss']
})
export class RegisterTypeComponent implements OnInit {
   register_types: RegisterType[] = [];
   register_typeSelected: RegisterType = new RegisterType();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private register_typeDataService: RegisterTypeService) {}

   ngOnInit() {
      this.goToPage(1);
   }

   selectRegisterType(register_type: RegisterType) {
      this.register_typeSelected = register_type;
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getRegisterTypes();
   }

   getRegisterTypes() {
      this.register_types = [];
      this.register_typeSelected = new RegisterType();
      this.register_typeDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.register_types = r.data as RegisterType[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newRegisterType(content) {
      this.register_typeSelected = new RegisterType();
      this.openDialog(content);
   }

   editRegisterType(content) {
      if (typeof this.register_typeSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteRegisterType() {
      if (typeof this.register_typeSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.register_typeDataService.delete(this.register_typeSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getRegisterTypes();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.register_typeDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_RegisterTypes.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.register_typeDataService.get().then( r => {
         const backupData = r as RegisterType[];
         let output = 'id;name;description;code;father_code;min_points\n';
         backupData.forEach(element => {
            output += element.id; + element.name + ';' + element.description + ';' + element.code + ';' + element.father_code + ';' + element.min_points + '\n';
         });
         const blob = new Blob([output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_RegisterTypes.csv');
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
            this.register_typeDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true , size: 'lg' }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.register_typeSelected.id === 'undefined') {
               this.register_typeDataService.post(this.register_typeSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getRegisterTypes();
               }).catch( e => console.log(e) );
            } else {
               this.register_typeDataService.put(this.register_typeSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getRegisterTypes();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}