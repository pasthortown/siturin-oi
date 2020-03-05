import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IdentificationRoutingModule } from './identification-routing.module';
import { IdentificationComponent } from './identification.component';
import { IdentificationService } from './../../../../services/CRUD/DINARDAP/identification.service';
import { environment } from 'src/environments/environment';
import { CKEditorModule } from 'ngx-ckeditor';

@NgModule({
   imports: [CommonModule,
             IdentificationRoutingModule,
             CKEditorModule,
             FormsModule],
   declarations: [IdentificationComponent],
   providers: [
               NgbModal,
               IdentificationService
               ]
})
export class IdentificationModule {}