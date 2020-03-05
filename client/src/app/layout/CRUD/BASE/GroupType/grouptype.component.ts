import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { GroupTypeService } from './../../../../services/CRUD/BASE/grouptype.service';
import { GroupType } from './../../../../models/BASE/GroupType';

@Component({
   selector: 'app-grouptype',
   templateUrl: './grouptype.component.html',
   styleUrls: ['./grouptype.component.scss']
})
export class GroupTypeComponent implements OnInit {
   group_types: GroupType[] = [];
   group_typeSelected: GroupType = new GroupType();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private group_typeDataService: GroupTypeService) {}

   ngOnInit() {
      this.goToPage(1);
   }

   selectGroupType(group_type: GroupType) {
      this.group_typeSelected = group_type;
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getGroupTypes();
   }

   getGroupTypes() {
      this.group_types = [];
      this.group_typeSelected = new GroupType();
      this.group_typeDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.group_types = r.data as GroupType[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newGroupType(content) {
      this.group_typeSelected = new GroupType();
      this.openDialog(content);
   }

   editGroupType(content) {
      if (typeof this.group_typeSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteGroupType() {
      if (typeof this.group_typeSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.group_typeDataService.delete(this.group_typeSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getGroupTypes();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.group_typeDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_GroupTypes.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.group_typeDataService.get().then( r => {
         const backupData = r as GroupType[];
         let output = 'id;name;description;representative_rol_name;representative_rol_description\n';
         backupData.forEach(element => {
            output += element.id + ';' + element.name + ';' + element.description + ';' + element.representative_rol_name + ';' + element.representative_rol_description + '\n';
         });
         const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_GroupTypes.csv');
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
            this.group_typeDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true , size: 'lg' }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.group_typeSelected.id === 'undefined') {
               this.group_typeDataService.post(this.group_typeSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getGroupTypes();
               }).catch( e => console.log(e) );
            } else {
               this.group_typeDataService.put(this.group_typeSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getGroupTypes();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}