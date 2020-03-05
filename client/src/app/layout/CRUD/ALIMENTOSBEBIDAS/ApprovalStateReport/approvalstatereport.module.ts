import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApprovalStateReportRoutingModule } from './approvalstatereport-routing.module';
import { ApprovalStateReportComponent } from './approvalstatereport.component';
import { ApprovalStateReportService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/approvalstatereport.service';
import { environment } from 'src/environments/environment';
import { ApprovalStateService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/approvalstate.service';
import { CKEditorModule } from 'ngx-ckeditor';

@NgModule({
   imports: [CommonModule,
             ApprovalStateReportRoutingModule,
             CKEditorModule,
             FormsModule],
   declarations: [ApprovalStateReportComponent],
   providers: [
               NgbModal,
               ApprovalStateService,
               ApprovalStateReportService
               ]
})
export class ApprovalStateReportModule {}