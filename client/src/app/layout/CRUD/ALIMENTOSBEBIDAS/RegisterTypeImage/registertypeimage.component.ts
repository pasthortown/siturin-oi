import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { RegisterTypeImageService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/registertypeimage.service';
import { RegisterTypeImage } from './../../../../models/ALIMENTOSBEBIDAS/RegisterTypeImage';
import { RegisterTypeService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/registertype.service';
import { RegisterType } from './../../../../models/ALIMENTOSBEBIDAS/RegisterType';


@Component({
   selector: 'app-registertypeimage',
   templateUrl: './registertypeimage.component.html',
   styleUrls: ['./registertypeimage.component.scss']
})
export class RegisterTypeImageComponent implements OnInit {
   register_type_images: RegisterTypeImage[] = [];
   register_type_imageSelected: RegisterTypeImage = new RegisterTypeImage();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   register_types: RegisterType[] = [];
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private register_typeDataService: RegisterTypeService,
               private register_type_imageDataService: RegisterTypeImageService) {}

   ngOnInit() {
      this.goToPage(1);
      this.getRegisterType();
   }

   CodeFileRegisterTypeImage(event) {
      const reader = new FileReader();
      if (event.target.files && event.target.files.length > 0) {
         const file = event.target.files[0];
         reader.readAsDataURL(file);
         reader.onload = () => {
            this.register_type_imageSelected.register_type_image_file_name = file.name;
            this.register_type_imageSelected.register_type_image_file_type = file.type;
            this.register_type_imageSelected.register_type_image_file = reader.result.toString().split(',')[1];
         };
      }
   }

   selectRegisterTypeImage(register_type_image: RegisterTypeImage) {
      this.register_type_imageSelected = register_type_image;
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
      this.getRegisterTypeImages();
   }

   getRegisterTypeImages() {
      this.register_type_images = [];
      this.register_type_imageSelected = new RegisterTypeImage();
      this.register_type_imageSelected.register_type_id = 0;
      this.register_type_imageDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.register_type_images = r.data as RegisterTypeImage[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newRegisterTypeImage(content) {
      this.register_type_imageSelected = new RegisterTypeImage();
      this.register_type_imageSelected.register_type_id = 0;
      this.openDialog(content);
   }

   editRegisterTypeImage(content) {
      if (typeof this.register_type_imageSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteRegisterTypeImage() {
      if (typeof this.register_type_imageSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.register_type_imageDataService.delete(this.register_type_imageSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getRegisterTypeImages();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.register_type_imageDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_RegisterTypeImages.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.register_type_imageDataService.get().then( r => {
         const backupData = r as RegisterTypeImage[];
         let output = 'id;register_type_image_file_type;register_type_image_file_name;register_type_image_file;register_type_id\n';
         backupData.forEach(element => {
            output += element.id; + element.register_type_image_file_type + ';' + element.register_type_image_file_name + ';' + element.register_type_image_file + ';' + element.register_type_id + '\n';
         });
         const blob = new Blob([output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_RegisterTypeImages.csv');
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
            this.register_type_imageDataService.masiveLoad(newData).then( r => {
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
            if (typeof this.register_type_imageSelected.id === 'undefined') {
               this.register_type_imageDataService.post(this.register_type_imageSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getRegisterTypeImages();
               }).catch( e => console.log(e) );
            } else {
               this.register_type_imageDataService.put(this.register_type_imageSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getRegisterTypeImages();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}