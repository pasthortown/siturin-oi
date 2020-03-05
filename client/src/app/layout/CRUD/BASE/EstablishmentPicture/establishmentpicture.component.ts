import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { EstablishmentPictureService } from './../../../../services/CRUD/BASE/establishmentpicture.service';
import { EstablishmentPicture } from './../../../../models/BASE/EstablishmentPicture';
import { EstablishmentService } from './../../../../services/CRUD/BASE/establishment.service';
import { Establishment } from './../../../../models/BASE/Establishment';


@Component({
   selector: 'app-establishmentpicture',
   templateUrl: './establishmentpicture.component.html',
   styleUrls: ['./establishmentpicture.component.scss']
})
export class EstablishmentPictureComponent implements OnInit {
   establishment_pictures: EstablishmentPicture[] = [];
   establishment_pictureSelected: EstablishmentPicture = new EstablishmentPicture();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   establishments: Establishment[] = [];
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private establishmentDataService: EstablishmentService,
               private establishment_pictureDataService: EstablishmentPictureService) {}

   ngOnInit() {
      this.goToPage(1);
      this.getEstablishment();
   }

   CodeFileEstablishmentPicture(event) {
      const reader = new FileReader();
      if (event.target.files && event.target.files.length > 0) {
         const file = event.target.files[0];
         reader.readAsDataURL(file);
         reader.onload = () => {
            this.establishment_pictureSelected.establishment_picture_file_name = file.name;
            this.establishment_pictureSelected.establishment_picture_file_type = file.type;
            this.establishment_pictureSelected.establishment_picture_file = reader.result.toString().split(',')[1];
         };
      }
   }

   selectEstablishmentPicture(establishment_picture: EstablishmentPicture) {
      this.establishment_pictureSelected = establishment_picture;
   }

   getEstablishment() {
      this.establishments = [];
      this.establishmentDataService.get().then( r => {
         this.establishments = r as Establishment[];
      }).catch( e => console.log(e) );
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getEstablishmentPictures();
   }

   getEstablishmentPictures() {
      this.establishment_pictures = [];
      this.establishment_pictureSelected = new EstablishmentPicture();
      this.establishment_pictureSelected.establishment_id = 0;
      this.establishment_pictureDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.establishment_pictures = r.data as EstablishmentPicture[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newEstablishmentPicture(content) {
      this.establishment_pictureSelected = new EstablishmentPicture();
      this.establishment_pictureSelected.establishment_id = 0;
      this.openDialog(content);
   }

   editEstablishmentPicture(content) {
      if (typeof this.establishment_pictureSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteEstablishmentPicture() {
      if (typeof this.establishment_pictureSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.establishment_pictureDataService.delete(this.establishment_pictureSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getEstablishmentPictures();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.establishment_pictureDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_EstablishmentPictures.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.establishment_pictureDataService.get().then( r => {
         const backupData = r as EstablishmentPicture[];
         let output = 'id;establishment_picture_file_type;establishment_picture_file_name;establishment_picture_file;establishment_id\n';
         backupData.forEach(element => {
            output += element.id + ';' + element.establishment_picture_file_type + ';' + element.establishment_picture_file_name + ';' + element.establishment_picture_file + ';' + element.establishment_id + '\n';
         });
         const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_EstablishmentPictures.csv');
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
            this.establishment_pictureDataService.masiveLoad(newData).then( r => {
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
            if (typeof this.establishment_pictureSelected.id === 'undefined') {
               this.establishment_pictureDataService.post(this.establishment_pictureSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getEstablishmentPictures();
               }).catch( e => console.log(e) );
            } else {
               this.establishment_pictureDataService.put(this.establishment_pictureSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getEstablishmentPictures();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}