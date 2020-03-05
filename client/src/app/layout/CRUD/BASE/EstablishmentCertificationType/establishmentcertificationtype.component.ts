import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { EstablishmentCertificationTypeService } from './../../../../services/CRUD/BASE/establishmentcertificationtype.service';
import { EstablishmentCertificationType } from './../../../../models/BASE/EstablishmentCertificationType';

@Component({
   selector: 'app-establishmentcertificationtype',
   templateUrl: './establishmentcertificationtype.component.html',
   styleUrls: ['./establishmentcertificationtype.component.scss']
})
export class EstablishmentCertificationTypeComponent implements OnInit {
   establishment_certification_types: EstablishmentCertificationType[] = [];
   establishment_certification_typeSelected: EstablishmentCertificationType = new EstablishmentCertificationType();


   all_certification_types: EstablishmentCertificationType[] = [];
   father_establishment_certification_types: EstablishmentCertificationType[] = [];
   filter_certification_type_father = 'all';


   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private establishment_certification_typeDataService: EstablishmentCertificationTypeService) {}

   ngOnInit() {
      this.refresh();
   }

   refresh() {
      this.getFatherEstablishmentCertificationTypes();
      this.goToPage(this.currentPage);
   }

   getFatherEstablishmentCertificationTypes() {
      this.father_establishment_certification_types = [];
      this.establishment_certification_typeDataService.get().then( r => {
         this.all_certification_types = r as EstablishmentCertificationType[];
         const response = r as EstablishmentCertificationType[];
         response.forEach(e1 => {
            let isFather = false;
            if(e1.father_code === '-') {
               isFather = true;
            }
            this.all_certification_types.forEach(e2 => {
               if(e2.father_code === e1.code) {
                  isFather = true;
               }
            });
            if(isFather) {
               this.father_establishment_certification_types.push(e1);
            }
         });
      }).catch( e => console.log(e) );
   }

   buildCode(fatherCode: String) {
      let count = 1;
      this.all_certification_types.forEach(element => {
         if(element.father_code === fatherCode) {
            count++;
         }
      });
      if(fatherCode === '-'){
         return count.toString();
      }
      return fatherCode + '.' + count.toString();
   }

   selectEstablishmentCertificationType(establishment_certification_type: EstablishmentCertificationType) {
      this.establishment_certification_typeSelected = establishment_certification_type;
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getEstablishmentCertificationTypes();
   }

   getEstablishmentCertificationTypes() {
      this.establishment_certification_types = [];
      this.establishment_certification_typeSelected = new EstablishmentCertificationType();
      this.establishment_certification_typeDataService.get_filtered_paginate(this.recordsByPage, this.currentPage, this.filter_certification_type_father).then( r => {
         this.establishment_certification_types = r.data as EstablishmentCertificationType[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newEstablishmentCertificationType(content) {
      this.establishment_certification_typeSelected = new EstablishmentCertificationType();
      this.openDialog(content);
   }

   editEstablishmentCertificationType(content) {
      if (typeof this.establishment_certification_typeSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteEstablishmentCertificationType() {
      if (typeof this.establishment_certification_typeSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.establishment_certification_typeDataService.delete(this.establishment_certification_typeSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.refresh();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.establishment_certification_typeDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_EstablishmentCertificationTypes.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.establishment_certification_typeDataService.get().then( r => {
         const backupData = r as EstablishmentCertificationType[];
         let output = 'id;name;code;father_code\n';
         backupData.forEach(element => {
            output += element.id + ';' + element.name + ';' + element.code + ';' + element.father_code + '\n';
         });
         const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_EstablishmentCertificationTypes.csv');
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
            this.establishment_certification_typeDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.establishment_certification_typeSelected.id === 'undefined') {
               this.establishment_certification_typeDataService.post(this.establishment_certification_typeSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.refresh();
               }).catch( e => console.log(e) );
            } else {
               this.establishment_certification_typeDataService.put(this.establishment_certification_typeSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.refresh();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}