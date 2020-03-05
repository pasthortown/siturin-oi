import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RucRoutingModule } from './ruc-routing.module';
import { RucComponent } from './ruc.component';
import { RucService } from './../../../../services/CRUD/DINARDAP/ruc.service';
import { environment } from 'src/environments/environment';
import { CKEditorModule } from 'ngx-ckeditor';

@NgModule({
   imports: [CommonModule,
             RucRoutingModule,
             CKEditorModule,
             FormsModule],
   declarations: [RucComponent],
   providers: [
               NgbModal,
               RucService
               ]
})
export class RucModule {}