import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PayAttachmentRoutingModule } from './payattachment-routing.module';
import { PayAttachmentComponent } from './payattachment.component';
import { PayAttachmentService } from './../../../../services/CRUD/FINANCIERO/payattachment.service';
import { environment } from 'src/environments/environment';
import { PayService } from './../../../../services/CRUD/FINANCIERO/pay.service';

@NgModule({
   imports: [CommonModule,
             PayAttachmentRoutingModule,
             FormsModule],
   declarations: [PayAttachmentComponent],
   providers: [
               NgbModal,
               PayService,
               PayAttachmentService
               ]
})
export class PayAttachmentModule {}