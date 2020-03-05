import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';
import { ReportService } from './../../../../services/CRUD/GAD/report.service';
import { environment } from 'src/environments/environment';
import { CKEditorModule } from 'ngx-ckeditor';

@NgModule({
   imports: [CommonModule,
             ReportRoutingModule,
             CKEditorModule,
             FormsModule],
   declarations: [ReportComponent],
   providers: [
               NgbModal,
               ReportService
               ]
})
export class ReportModule {}