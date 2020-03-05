import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { FoodDrinkAttachmentService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/fooddrinkattachment.service';
import { FoodDrinkAttachment } from './../../../../models/ALIMENTOSBEBIDAS/FoodDrinkAttachment';
import { RegisterService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/register.service';
import { Register } from './../../../../models/ALIMENTOSBEBIDAS/Register';


@Component({
   selector: 'app-fooddrinkattachment',
   templateUrl: './fooddrinkattachment.component.html',
   styleUrls: ['./fooddrinkattachment.component.scss']
})
export class FoodDrinkAttachmentComponent implements OnInit {
   food_drink_attachments: FoodDrinkAttachment[] = [];
   food_drink_attachmentSelected: FoodDrinkAttachment = new FoodDrinkAttachment();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   registers: Register[] = [];
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private registerDataService: RegisterService,
               private food_drink_attachmentDataService: FoodDrinkAttachmentService) {}

   ngOnInit() {
      this.goToPage(1);
      this.getRegister();
   }

   CodeFileFoodDrinkAttachment(event) {
      const reader = new FileReader();
      if (event.target.files && event.target.files.length > 0) {
         const file = event.target.files[0];
         reader.readAsDataURL(file);
         reader.onload = () => {
            this.food_drink_attachmentSelected.food_drink_attachment_file_name = file.name;
            this.food_drink_attachmentSelected.food_drink_attachment_file_type = file.type;
            this.food_drink_attachmentSelected.food_drink_attachment_file = reader.result.toString().split(',')[1];
         };
      }
   }

   selectFoodDrinkAttachment(food_drink_attachment: FoodDrinkAttachment) {
      this.food_drink_attachmentSelected = food_drink_attachment;
   }

   getRegister() {
      this.registers = [];
      this.registerDataService.get().then( r => {
         this.registers = r as Register[];
      }).catch( e => console.log(e) );
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getFoodDrinkAttachments();
   }

   getFoodDrinkAttachments() {
      this.food_drink_attachments = [];
      this.food_drink_attachmentSelected = new FoodDrinkAttachment();
      this.food_drink_attachmentSelected.register_id = 0;
      this.food_drink_attachmentDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.food_drink_attachments = r.data as FoodDrinkAttachment[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newFoodDrinkAttachment(content) {
      this.food_drink_attachmentSelected = new FoodDrinkAttachment();
      this.food_drink_attachmentSelected.register_id = 0;
      this.openDialog(content);
   }

   editFoodDrinkAttachment(content) {
      if (typeof this.food_drink_attachmentSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteFoodDrinkAttachment() {
      if (typeof this.food_drink_attachmentSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.food_drink_attachmentDataService.delete(this.food_drink_attachmentSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getFoodDrinkAttachments();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.food_drink_attachmentDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_FoodDrinkAttachments.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.food_drink_attachmentDataService.get().then( r => {
         const backupData = r as FoodDrinkAttachment[];
         let output = 'id;type;food_drink_attachment_file_type;food_drink_attachment_file_name;food_drink_attachment_file;date;year;register_id\n';
         backupData.forEach(element => {
            output += element.id; + element.type + ';' + element.food_drink_attachment_file_type + ';' + element.food_drink_attachment_file_name + ';' + element.food_drink_attachment_file + ';' + element.date + ';' + element.year + ';' + element.register_id + '\n';
         });
         const blob = new Blob([output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_FoodDrinkAttachments.csv');
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
            this.food_drink_attachmentDataService.masiveLoad(newData).then( r => {
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
            if (typeof this.food_drink_attachmentSelected.id === 'undefined') {
               this.food_drink_attachmentDataService.post(this.food_drink_attachmentSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getFoodDrinkAttachments();
               }).catch( e => console.log(e) );
            } else {
               this.food_drink_attachmentDataService.put(this.food_drink_attachmentSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getFoodDrinkAttachments();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}