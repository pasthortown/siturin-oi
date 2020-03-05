import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { GroupGivenService } from './../../../../services/CRUD/BASE/groupgiven.service';
import { GroupGiven } from './../../../../models/BASE/GroupGiven';
import { RucService } from './../../../../services/CRUD/BASE/ruc.service';
import { Ruc } from './../../../../models/BASE/Ruc';

import { PersonRepresentativeService } from './../../../../services/CRUD/BASE/personrepresentative.service';
import { PersonRepresentative } from './../../../../models/BASE/PersonRepresentative';

import { GroupTypeService } from './../../../../services/CRUD/BASE/grouptype.service';
import { GroupType } from './../../../../models/BASE/GroupType';


@Component({
   selector: 'app-groupgiven',
   templateUrl: './groupgiven.component.html',
   styleUrls: ['./groupgiven.component.scss']
})
export class GroupGivenComponent implements OnInit {
   group_givens: GroupGiven[] = [];
   group_givenSelected: GroupGiven = new GroupGiven();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   rucs: Ruc[] = [];
   person_representatives: PersonRepresentative[] = [];
   group_types: GroupType[] = [];
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private rucDataService: RucService,
               private person_representativeDataService: PersonRepresentativeService,
               private group_typeDataService: GroupTypeService,
               private group_givenDataService: GroupGivenService) {}

   ngOnInit() {
      this.goToPage(1);
      this.getRuc();
      this.getPersonRepresentative();
      this.getGroupType();
   }

   selectGroupGiven(group_given: GroupGiven) {
      this.group_givenSelected = group_given;
   }

   getRuc() {
      this.rucs = [];
      this.rucDataService.get().then( r => {
         this.rucs = r as Ruc[];
      }).catch( e => console.log(e) );
   }

   getPersonRepresentative() {
      this.person_representatives = [];
      this.person_representativeDataService.get().then( r => {
         this.person_representatives = r as PersonRepresentative[];
      }).catch( e => console.log(e) );
   }

   getGroupType() {
      this.group_types = [];
      this.group_typeDataService.get().then( r => {
         this.group_types = r as GroupType[];
      }).catch( e => console.log(e) );
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getGroupGivens();
   }

   getGroupGivens() {
      this.group_givens = [];
      this.group_givenSelected = new GroupGiven();
      this.group_givenSelected.ruc_id = 0;
      this.group_givenSelected.person_representative_id = 0;
      this.group_givenSelected.group_type_id = 0;
      this.group_givenDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.group_givens = r.data as GroupGiven[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newGroupGiven(content) {
      this.group_givenSelected = new GroupGiven();
      this.group_givenSelected.ruc_id = 0;
      this.group_givenSelected.person_representative_id = 0;
      this.group_givenSelected.group_type_id = 0;
      this.openDialog(content);
   }

   editGroupGiven(content) {
      if (typeof this.group_givenSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteGroupGiven() {
      if (typeof this.group_givenSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.group_givenDataService.delete(this.group_givenSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getGroupGivens();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.group_givenDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_GroupGivens.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.group_givenDataService.get().then( r => {
         const backupData = r as GroupGiven[];
         let output = 'id;register_code;ruc_id;person_representative_id;group_type_id\n';
         backupData.forEach(element => {
            output += element.id + ';' + element.register_code + ';' + element.ruc_id + ';' + element.person_representative_id + ';' + element.group_type_id + '\n';
         });
         const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_GroupGivens.csv');
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
            this.group_givenDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.group_givenSelected.id === 'undefined') {
               this.group_givenDataService.post(this.group_givenSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getGroupGivens();
               }).catch( e => console.log(e) );
            } else {
               this.group_givenDataService.put(this.group_givenSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getGroupGivens();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}