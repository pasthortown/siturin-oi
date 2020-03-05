import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WorkerGroupRoutingModule } from './workergroup-routing.module';
import { WorkerGroupComponent } from './workergroup.component';
import { WorkerGroupService } from './../../../../services/CRUD/BASE/workergroup.service';
import { environment } from 'src/environments/environment';
import { CKEditorModule } from 'ngx-ckeditor';

@NgModule({
   imports: [CommonModule,
             WorkerGroupRoutingModule,
             CKEditorModule,
             FormsModule],
   declarations: [WorkerGroupComponent],
   providers: [
               NgbModal,
               WorkerGroupService
               ]
})
export class WorkerGroupModule {}