import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReportAttachmentRoutingModule } from './reportattachment-routing.module';
import { ReportAttachmentComponent } from './reportattachment.component';
import { ReportAttachmentService } from './../../../../services/CRUD/GAD/reportattachment.service';
import { environment } from 'src/environments/environment';
import { ReportService } from './../../../../services/CRUD/GAD/report.service';

@NgModule({
   imports: [CommonModule,
             ReportAttachmentRoutingModule,
             FormsModule],
   declarations: [ReportAttachmentComponent],
   providers: [
               NgbModal,
               ReportService,
               ReportAttachmentService
               ]
})
export class ReportAttachmentModule {}