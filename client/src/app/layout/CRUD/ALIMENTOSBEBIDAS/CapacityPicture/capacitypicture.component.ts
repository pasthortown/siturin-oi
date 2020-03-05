import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { CapacityPictureService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/capacitypicture.service';
import { CapacityPicture } from './../../../../models/ALIMENTOSBEBIDAS/CapacityPicture';
import { CapacityService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/capacity.service';
import { Capacity } from './../../../../models/ALIMENTOSBEBIDAS/Capacity';


@Component({
   selector: 'app-capacitypicture',
   templateUrl: './capacitypicture.component.html',
   styleUrls: ['./capacitypicture.component.scss']
})
export class CapacityPictureComponent implements OnInit {
   capacity_pictures: CapacityPicture[] = [];
   capacity_pictureSelected: CapacityPicture = new CapacityPicture();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   capacities: Capacity[] = [];
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private capacityDataService: CapacityService,
               private capacity_pictureDataService: CapacityPictureService) {}

   ngOnInit() {
      this.goToPage(1);
      this.getCapacity();
   }

   CodeFileCapacityPicture(event) {
      const reader = new FileReader();
      if (event.target.files && event.target.files.length > 0) {
         const file = event.target.files[0];
         reader.readAsDataURL(file);
         reader.onload = () => {
            this.capacity_pictureSelected.capacity_picture_file_name = file.name;
            this.capacity_pictureSelected.capacity_picture_file_type = file.type;
            this.capacity_pictureSelected.capacity_picture_file = reader.result.toString().split(',')[1];
         };
      }
   }

   selectCapacityPicture(capacity_picture: CapacityPicture) {
      this.capacity_pictureSelected = capacity_picture;
   }

   getCapacity() {
      this.capacities = [];
      this.capacityDataService.get().then( r => {
         this.capacities = r as Capacity[];
      }).catch( e => console.log(e) );
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getCapacityPictures();
   }

   getCapacityPictures() {
      this.capacity_pictures = [];
      this.capacity_pictureSelected = new CapacityPicture();
      this.capacity_pictureSelected.capacity_id = 0;
      this.capacity_pictureDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.capacity_pictures = r.data as CapacityPicture[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newCapacityPicture(content) {
      this.capacity_pictureSelected = new CapacityPicture();
      this.capacity_pictureSelected.capacity_id = 0;
      this.openDialog(content);
   }

   editCapacityPicture(content) {
      if (typeof this.capacity_pictureSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteCapacityPicture() {
      if (typeof this.capacity_pictureSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.capacity_pictureDataService.delete(this.capacity_pictureSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getCapacityPictures();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.capacity_pictureDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_CapacityPictures.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.capacity_pictureDataService.get().then( r => {
         const backupData = r as CapacityPicture[];
         let output = 'id;capacity_picture_file_type;capacity_picture_file_name;capacity_picture_file;capacity_id\n';
         backupData.forEach(element => {
            output += element.id; + element.capacity_picture_file_type + ';' + element.capacity_picture_file_name + ';' + element.capacity_picture_file + ';' + element.capacity_id + '\n';
         });
         const blob = new Blob([output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_CapacityPictures.csv');
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
            this.capacity_pictureDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   downloadFile(file: string, type: string, name: string) {
      const byteCharacters = atob(file);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
         byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: type});
      saveAs(blob, name);
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true , size: 'lg' }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.capacity_pictureSelected.id === 'undefined') {
               this.capacity_pictureDataService.post(this.capacity_pictureSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getCapacityPictures();
               }).catch( e => console.log(e) );
            } else {
               this.capacity_pictureDataService.put(this.capacity_pictureSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getCapacityPictures();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}