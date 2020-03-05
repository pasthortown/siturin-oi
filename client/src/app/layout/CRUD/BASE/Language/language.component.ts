import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { LanguageService } from './../../../../services/CRUD/BASE/language.service';
import { Language } from './../../../../models/BASE/Language';

@Component({
   selector: 'app-language',
   templateUrl: './language.component.html',
   styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {
   languages: Language[] = [];
   languageSelected: Language = new Language();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private languageDataService: LanguageService) {}

   ngOnInit() {
      this.goToPage(1);
   }

   selectLanguage(language: Language) {
      this.languageSelected = language;
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getLanguages();
   }

   getLanguages() {
      this.languages = [];
      this.languageSelected = new Language();
      this.languageDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.languages = r.data as Language[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newLanguage(content) {
      this.languageSelected = new Language();
      this.openDialog(content);
   }

   editLanguage(content) {
      if (typeof this.languageSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteLanguage() {
      if (typeof this.languageSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.languageDataService.delete(this.languageSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getLanguages();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.languageDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_Languages.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.languageDataService.get().then( r => {
         const backupData = r as Language[];
         let output = 'id;name\n';
         backupData.forEach(element => {
            output += element.id + ';' + element.name + '\n';
         });
         const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_Languages.csv');
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
            this.languageDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.languageSelected.id === 'undefined') {
               this.languageDataService.post(this.languageSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getLanguages();
               }).catch( e => console.log(e) );
            } else {
               this.languageDataService.put(this.languageSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getLanguages();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}