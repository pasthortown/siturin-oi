import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { ReceptionRoomService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/receptionroom.service';
import { ReceptionRoom } from './../../../../models/ALIMENTOSBEBIDAS/ReceptionRoom';
import { RegisterService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/register.service';
import { Register } from './../../../../models/ALIMENTOSBEBIDAS/Register';


@Component({
   selector: 'app-receptionroom',
   templateUrl: './receptionroom.component.html',
   styleUrls: ['./receptionroom.component.scss']
})
export class ReceptionRoomComponent implements OnInit {
   reception_rooms: ReceptionRoom[] = [];
   reception_roomSelected: ReceptionRoom = new ReceptionRoom();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   registers: Register[] = [];
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private registerDataService: RegisterService,
               private reception_roomDataService: ReceptionRoomService) {}

   ngOnInit() {
      this.goToPage(1);
      this.getRegister();
   }

   selectReceptionRoom(reception_room: ReceptionRoom) {
      this.reception_roomSelected = reception_room;
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
      this.getReceptionRooms();
   }

   getReceptionRooms() {
      this.reception_rooms = [];
      this.reception_roomSelected = new ReceptionRoom();
      this.reception_roomSelected.register_id = 0;
      this.reception_roomDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.reception_rooms = r.data as ReceptionRoom[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newReceptionRoom(content) {
      this.reception_roomSelected = new ReceptionRoom();
      this.reception_roomSelected.register_id = 0;
      this.openDialog(content);
   }

   editReceptionRoom(content) {
      if (typeof this.reception_roomSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteReceptionRoom() {
      if (typeof this.reception_roomSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.reception_roomDataService.delete(this.reception_roomSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getReceptionRooms();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.reception_roomDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_ReceptionRooms.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.reception_roomDataService.get().then( r => {
         const backupData = r as ReceptionRoom[];
         let output = 'id;quantity;fullfill;register_id\n';
         backupData.forEach(element => {
            output += element.id; + element.quantity + ';' + element.fullfill + ';' + element.register_id + '\n';
         });
         const blob = new Blob([output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_ReceptionRooms.csv');
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
            this.reception_roomDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.reception_roomSelected.id === 'undefined') {
               this.reception_roomDataService.post(this.reception_roomSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getReceptionRooms();
               }).catch( e => console.log(e) );
            } else {
               this.reception_roomDataService.put(this.reception_roomSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getReceptionRooms();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}