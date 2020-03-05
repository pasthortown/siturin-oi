import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApprovalRoutingModule } from './approval-routing.module';
import { ApprovalComponent } from './approval.component';
import { ApprovalService } from './../../../../services/CRUD/ALOJAMIENTO/approval.service';
import { environment } from 'src/environments/environment';

@NgModule({
   imports: [CommonModule,
             ApprovalRoutingModule,
             FormsModule],
   declarations: [ApprovalComponent],
   providers: [
               NgbModal,
               ApprovalService
               ]
})
export class ApprovalModule {}