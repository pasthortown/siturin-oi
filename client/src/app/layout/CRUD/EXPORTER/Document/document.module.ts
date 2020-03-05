import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DocumentRoutingModule } from './document-routing.module';
import { DocumentComponent } from './document.component';
import { DocumentService } from './../../../../services/CRUD/EXPORTER/document.service';
import { environment } from 'src/environments/environment';
import { CKEditorModule } from 'ngx-ckeditor';

@NgModule({
   imports: [CommonModule,
             DocumentRoutingModule,
             CKEditorModule,
             FormsModule],
   declarations: [DocumentComponent],
   providers: [
               NgbModal,
               DocumentService
               ]
})
export class DocumentModule {}