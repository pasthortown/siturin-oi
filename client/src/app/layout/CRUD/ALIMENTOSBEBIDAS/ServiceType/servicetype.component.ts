import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { ServiceTypeService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/servicetype.service';
import { ServiceType } from './../../../../models/ALIMENTOSBEBIDAS/ServiceType';
import { RegisterTypeService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/registertype.service';
import { RegisterType } from './../../../../models/ALIMENTOSBEBIDAS/RegisterType';


@Component({
   selector: 'app-servicetype',
   templateUrl: './servicetype.component.html',
   styleUrls: ['./servicetype.component.scss']
})
export class ServiceTypeComponent implements OnInit {
   service_types: ServiceType[] = [];
   service_typeSelected: ServiceType = new ServiceType();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   register_types: RegisterType[] = [];
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private register_typeDataService: RegisterTypeService,
               private service_typeDataService: ServiceTypeService) {}

   ngOnInit() {
      this.goToPage(1);
      this.getRegisterType();
   }

   selectServiceType(service_type: ServiceType) {
      this.service_typeSelected = service_type;
   }

   getRegisterType() {
      this.register_types = [];
      this.register_typeDataService.get().then( r => {
         this.register_types = r as RegisterType[];
      }).catch( e => console.log(e) );
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getServiceTypes();
   }

   getServiceTypes() {
      this.service_types = [];
      this.service_typeSelected = new ServiceType();
      this.service_typeSelected.register_type_id = 0;
      this.service_typeDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.service_types = r.data as ServiceType[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newServiceType(content) {
      this.service_typeSelected = new ServiceType();
      this.service_typeSelected.register_type_id = 0;
      this.openDialog(content);
   }

   editServiceType(content) {
      if (typeof this.service_typeSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteServiceType() {
      if (typeof this.service_typeSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.service_typeDataService.delete(this.service_typeSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getServiceTypes();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.service_typeDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_ServiceTypes.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.service_typeDataService.get().then( r => {
         const backupData = r as ServiceType[];
         let output = 'id;description;register_type_id\n';
         backupData.forEach(element => {
            output += element.id; + element.description + ';' + element.register_type_id + '\n';
         });
         const blob = new Blob([output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_ServiceTypes.csv');
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
            this.service_typeDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.service_typeSelected.id === 'undefined') {
               this.service_typeDataService.post(this.service_typeSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getServiceTypes();
               }).catch( e => console.log(e) );
            } else {
               this.service_typeDataService.put(this.service_typeSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getServiceTypes();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}