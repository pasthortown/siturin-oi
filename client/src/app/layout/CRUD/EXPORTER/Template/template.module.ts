import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from './template.component';
import { TemplateService } from './../../../../services/CRUD/EXPORTER/template.service';
import { environment } from 'src/environments/environment';
import { CKEditorModule } from 'ngx-ckeditor';
import { ExporterService } from 'src/app/services/negocio/exporter.service';


@NgModule({
   imports: [CommonModule,
             TemplateRoutingModule,
             CKEditorModule,
             FormsModule],
   declarations: [TemplateComponent],
   providers: [
               NgbModal,
               TemplateService,
               ExporterService
               ]
})
export class TemplateModule {}