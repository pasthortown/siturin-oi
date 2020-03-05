import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { WorkerGroupService } from './../../../../services/CRUD/BASE/workergroup.service';
import { WorkerGroup } from './../../../../models/BASE/WorkerGroup';

@Component({
   selector: 'app-workergroup',
   templateUrl: './workergroup.component.html',
   styleUrls: ['./workergroup.component.scss']
})
export class WorkerGroupComponent implements OnInit {
   worker_groups: WorkerGroup[] = [];
   worker_groupSelected: WorkerGroup = new WorkerGroup();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private worker_groupDataService: WorkerGroupService) {}

   ngOnInit() {
      this.goToPage(1);
   }

   selectWorkerGroup(worker_group: WorkerGroup) {
      this.worker_groupSelected = worker_group;
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getWorkerGroups();
   }

   getWorkerGroups() {
      this.worker_groups = [];
      this.worker_groupSelected = new WorkerGroup();
      this.worker_groupDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.worker_groups = r.data as WorkerGroup[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newWorkerGroup(content) {
      this.worker_groupSelected = new WorkerGroup();
      this.openDialog(content);
   }

   editWorkerGroup(content) {
      if (typeof this.worker_groupSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteWorkerGroup() {
      if (typeof this.worker_groupSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.worker_groupDataService.delete(this.worker_groupSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getWorkerGroups();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.worker_groupDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_WorkerGroups.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.worker_groupDataService.get().then( r => {
         const backupData = r as WorkerGroup[];
         let output = 'id;name;description;is_max\n';
         backupData.forEach(element => {
            output += element.id + ';' + element.name + ';' + element.description + ';' + element.is_max + '\n';
         });
         const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_WorkerGroups.csv');
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
            this.worker_groupDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true , size: 'lg' }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.worker_groupSelected.id === 'undefined') {
               this.worker_groupDataService.post(this.worker_groupSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getWorkerGroups();
               }).catch( e => console.log(e) );
            } else {
               this.worker_groupDataService.put(this.worker_groupSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getWorkerGroups();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}