import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrManager } from 'ng6-toastr-notifications';
import { saveAs } from 'file-saver/FileSaver';
import { WorkerService } from './../../../../services/CRUD/BASE/worker.service';
import { Worker } from './../../../../models/BASE/Worker';
import { GenderService } from './../../../../services/CRUD/BASE/gender.service';
import { Gender } from './../../../../models/BASE/Gender';

import { WorkerGroupService } from './../../../../services/CRUD/BASE/workergroup.service';
import { WorkerGroup } from './../../../../models/BASE/WorkerGroup';


@Component({
   selector: 'app-worker',
   templateUrl: './worker.component.html',
   styleUrls: ['./worker.component.scss']
})
export class WorkerComponent implements OnInit {
   workers: Worker[] = [];
   workerSelected: Worker = new Worker();

   currentPage = 1;
   lastPage = 1;
   showDialog = false;
   recordsByPage = 5;
   genders: Gender[] = [];
   worker_groups: WorkerGroup[] = [];
   constructor(
               private modalService: NgbModal,
               private toastr: ToastrManager,
               private genderDataService: GenderService,
               private worker_groupDataService: WorkerGroupService,
               private workerDataService: WorkerService) {}

   ngOnInit() {
      this.goToPage(1);
      this.getGender();
      this.getWorkerGroup();
   }

   selectWorker(worker: Worker) {
      this.workerSelected = worker;
   }

   getGender() {
      this.genders = [];
      this.genderDataService.get().then( r => {
         this.genders = r as Gender[];
      }).catch( e => console.log(e) );
   }

   getWorkerGroup() {
      this.worker_groups = [];
      this.worker_groupDataService.get().then( r => {
         this.worker_groups = r as WorkerGroup[];
      }).catch( e => console.log(e) );
   }

   goToPage(page: number) {
      if ( page < 1 || page > this.lastPage ) {
         this.toastr.errorToastr('La página solicitada no existe.', 'Error');
         return;
      }
      this.currentPage = page;
      this.getWorkers();
   }

   getWorkers() {
      this.workers = [];
      this.workerSelected = new Worker();
      this.workerSelected.gender_id = 0;
      this.workerSelected.worker_group_id = 0;
      this.workerDataService.get_paginate(this.recordsByPage, this.currentPage).then( r => {
         this.workers = r.data as Worker[];
         this.lastPage = r.last_page;
      }).catch( e => console.log(e) );
   }

   newWorker(content) {
      this.workerSelected = new Worker();
      this.workerSelected.gender_id = 0;
      this.workerSelected.worker_group_id = 0;
      this.openDialog(content);
   }

   editWorker(content) {
      if (typeof this.workerSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.openDialog(content);
   }

   deleteWorker() {
      if (typeof this.workerSelected.id === 'undefined') {
         this.toastr.errorToastr('Debe seleccionar un registro.', 'Error');
         return;
      }
      this.workerDataService.delete(this.workerSelected.id).then( r => {
         this.toastr.successToastr('Registro Borrado satisfactoriamente.', 'Borrar');
         this.getWorkers();
      }).catch( e => console.log(e) );
   }

   backup() {
      this.workerDataService.getBackUp().then( r => {
         const backupData = r;
         const blob = new Blob([JSON.stringify(backupData)], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_Workers.json');
      }).catch( e => console.log(e) );
   }

   toCSV() {
      this.workerDataService.get().then( r => {
         const backupData = r as Worker[];
         let output = 'id;count;gender_id;worker_group_id\n';
         backupData.forEach(element => {
            output += element.id + ';' + element.count + ';' + element.gender_id + ';' + element.worker_group_id + '\n';
         });
         const blob = new Blob(["\ufeff", output], { type: 'text/plain' });
         const fecha = new Date();
         saveAs(blob, fecha.toLocaleDateString() + '_Workers.csv');
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
            this.workerDataService.masiveLoad(newData).then( r => {
               this.goToPage(this.currentPage);
            }).catch( e => console.log(e) );
         };
      }
   }

   openDialog(content) {
      this.modalService.open(content, { centered: true }).result.then(( response => {
         if ( response === 'Guardar click' ) {
            if (typeof this.workerSelected.id === 'undefined') {
               this.workerDataService.post(this.workerSelected).then( r => {
                  this.toastr.successToastr('Datos guardados satisfactoriamente.', 'Nuevo');
                  this.getWorkers();
               }).catch( e => console.log(e) );
            } else {
               this.workerDataService.put(this.workerSelected).then( r => {
                  this.toastr.successToastr('Registro actualizado satisfactoriamente.', 'Actualizar');
                  this.getWorkers();
               }).catch( e => console.log(e) );
            }
         }
      }), ( r => {}));
   }
}