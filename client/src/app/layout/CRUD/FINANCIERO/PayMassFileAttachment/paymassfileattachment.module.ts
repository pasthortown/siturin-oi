import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PayMassFileAttachmentRoutingModule } from './paymassfileattachment-routing.module';
import { PayMassFileAttachmentComponent } from './paymassfileattachment.component';
import { PayMassFileAttachmentService } from './../../../../services/CRUD/FINANCIERO/paymassfileattachment.service';
import { environment } from 'src/environments/environment';

@NgModule({
   imports: [CommonModule,
             PayMassFileAttachmentRoutingModule,
             FormsModule],
   declarations: [PayMassFileAttachmentComponent],
   providers: [
               NgbModal,
               PayMassFileAttachmentService
               ]
})
export class PayMassFileAttachmentModule {}