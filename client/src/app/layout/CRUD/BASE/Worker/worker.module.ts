import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WorkerRoutingModule } from './worker-routing.module';
import { WorkerComponent } from './worker.component';
import { WorkerService } from './../../../../services/CRUD/BASE/worker.service';
import { environment } from 'src/environments/environment';
import { GenderService } from './../../../../services/CRUD/BASE/gender.service';
import { WorkerGroupService } from './../../../../services/CRUD/BASE/workergroup.service';

@NgModule({
   imports: [CommonModule,
             WorkerRoutingModule,
             FormsModule],
   declarations: [WorkerComponent],
   providers: [
               NgbModal,
               GenderService,
               WorkerGroupService,
               WorkerService
               ]
})
export class WorkerModule {}