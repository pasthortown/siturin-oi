import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { AccountRolService } from './../../../../services/CRUD/AUTH/accountrol.service';
import { AccountRol } from './../../../../models/AUTH/AccountRol';

@Component({
   selector: 'app-accountrol',
   templateUrl: './accountrol.component.html',
   styleUrls: ['./accountrol.component.scss']
})
export class AccountRolComponent implements OnInit {
   account_rols: AccountRol[] = [];
   father_rols: AccountRol[] = [];
   all_rols: AccountRol[] = [];
   account_rolSelected: AccountRol = new AccountRol();
   filter_rol_father = 'all';
   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private account_rolDataService: AccountRolService) {}

   ngOnInit() {
      this.refresh();
   }

   refresh() {
      this.getFatherRols();
      this.goToPage(this.currentPage);
   }

   getFatherRols() {
      this.father_rols = [];
      this.account_rolDataService.get().then( r => {
         this.all_rols = r as AccountRol[];
         const response = r as AccountRol[];
         response.forEach(e1 => {
            let isFather = false;
            if(e1.father_code === '-') {
               isFather = true;
            }
            this.all_rols.forEach(e2 => {
               if(e2.father_code === e1.code) {
                  isFather = true;
               }
            });
            if(isFather) {
               this.father_rols.push(e1);
            }
         });
      }).catch( e => console.log(e) );
   }

   buildCode(fatherCode: String) {
      let count = 1;
      this.all_rols.forEach(element => {
         if(element.father_code === fatherCode) {
            count++;
         }
      });
      if(fatherCode === '-'){
         return count.toString();
      }
      return fatherCode + '.' + count.toString();
   }

   selectAccountRol(account_rol: AccountRol) {
      this.account_rolSelected = account_rol;
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getAccountRols();
   }

   getAccountRols() {
      this.account_rols = [];
      this.account_rolSelected = new AccountRol();
      this.account_rolDataService.get_filtered(this.recordsByPage, this.currentPage, this.filter_rol_father).then( r => {
         this.account_rols = r.data as AccountRol[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newAccountRol(content) {
      this.account_rolSelected = new AccountRol();
      this.account_rolSelected.code = this.buildCode(this.account_rolSelected.father_code);
      this.openDialog(content); 
   }

   editAccountRol(content) {
      if (typeof this.account_rolSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteAccountRol() {
      if (typeof this.account_rolSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.account_rolDataService.delete(this.account_rolSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getAccountRols();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.account_rolDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_AccountRols.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.account_rolDataService.get().then( r => {
         const backupData = r as AccountRol[];
         let output = 'id;name;code;father_code\n';
         backupData.forEach(element => {
            output += element.id + ';' + element.name + ';' + element.code + ';' + element.father_code + '\n';
         });
         const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_AccountRols.csv');
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
            this.account_rolDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true , size: 'lg' }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.account_rolSelected.id === 'undefined') {
               this.account_rolDataService.post(this.account_rolSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.refresh();
               }).catch( e => console.log(e) );
            } else {
               this.account_rolDataService.put(this.account_rolSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.refresh();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}