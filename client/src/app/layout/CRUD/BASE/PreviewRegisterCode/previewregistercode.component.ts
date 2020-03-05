import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { PreviewRegisterCodeService } from './../../../../services/CRUD/BASE/previewregistercode.service';
import { PreviewRegisterCode } from './../../../../models/BASE/PreviewRegisterCode';
import { SystemNameService } from './../../../../services/CRUD/BASE/systemname.service';
import { SystemName } from './../../../../models/BASE/SystemName';


@Component({
   selector: 'app-previewregistercode',
   templateUrl: './previewregistercode.component.html',
   styleUrls: ['./previewregistercode.component.scss']
})
export class PreviewRegisterCodeComponent implements OnInit {
   preview_register_codes: PreviewRegisterCode[] = [];
   preview_register_codeSelected: PreviewRegisterCode = new PreviewRegisterCode();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   system_names: SystemName[] = [];
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private system_nameDataService: SystemNameService,
               private preview_register_codeDataService: PreviewRegisterCodeService) {}

   ngOnInit() {
      this.goToPage(1);
      this.getSystemName();
   }

   selectPreviewRegisterCode(preview_register_code: PreviewRegisterCode) {
      this.preview_register_codeSelected = preview_register_code;
   }

   getSystemName() {
      this.system_names = [];
      this.system_nameDataService.get().then( r => {
         this.system_names = r as SystemName[];
      }).catch( e => console.log(e) );
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getPreviewRegisterCodes();
   }

   getPreviewRegisterCodes() {
      this.preview_register_codes = [];
      this.preview_register_codeSelected = new PreviewRegisterCode();
      this.preview_register_codeSelected.system_name_id = 0;
      this.preview_register_codeDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.preview_register_codes = r.data as PreviewRegisterCode[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newPreviewRegisterCode(content) {
      this.preview_register_codeSelected = new PreviewRegisterCode();
      this.preview_register_codeSelected.system_name_id = 0;
      this.openDialog(content);
   }

   editPreviewRegisterCode(content) {
      if (typeof this.preview_register_codeSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deletePreviewRegisterCode() {
      if (typeof this.preview_register_codeSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.preview_register_codeDataService.delete(this.preview_register_codeSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getPreviewRegisterCodes();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.preview_register_codeDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_PreviewRegisterCodes.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.preview_register_codeDataService.get().then( r => {
         const backupData = r as PreviewRegisterCode[];
         let output = 'id;code;system_name_id\n';
         backupData.forEach(element => {
            output += element.id + ';' + element.code + ';' + element.system_name_id + '\n';
         });
         const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_PreviewRegisterCodes.csv');
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
            this.preview_register_codeDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.preview_register_codeSelected.id === 'undefined') {
               this.preview_register_codeDataService.post(this.preview_register_codeSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getPreviewRegisterCodes();
               }).catch( e => console.log(e) );
            } else {
               this.preview_register_codeDataService.put(this.preview_register_codeSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getPreviewRegisterCodes();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}