import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApprovalStateAttachmentRoutingModule } from './approvalstateattachment-routing.module';
import { ApprovalStateAttachmentComponent } from './approvalstateattachment.component';
import { ApprovalStateAttachmentService } from './../../../../services/CRUD/ALOJAMIENTO/approvalstateattachment.service';
import { environment } from 'src/environments/environment';
import { ApprovalStateService } from './../../../../services/CRUD/ALOJAMIENTO/approvalstate.service';

@NgModule({
   imports: [CommonModule,
             ApprovalStateAttachmentRoutingModule,
             FormsModule],
   declarations: [ApprovalStateAttachmentComponent],
   providers: [
               NgbModal,
               ApprovalStateService,
               ApprovalStateAttachmentService
               ]
})
export class ApprovalStateAttachmentModule {}