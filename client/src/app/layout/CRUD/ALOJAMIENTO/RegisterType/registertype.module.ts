import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterTypeRoutingModule } from './registertype-routing.module';
import { RegisterTypeComponent } from './registertype.component';
import { RegisterTypeService } from './../../../../services/CRUD/ALOJAMIENTO/registertype.service';
import { environment } from 'src/environments/environment';
import { CKEditorModule } from 'ngx-ckeditor';

@NgModule({
   imports: [CommonModule,
             RegisterTypeRoutingModule,
             CKEditorModule,
             FormsModule],
   declarations: [RegisterTypeComponent],
   providers: [
               NgbModal,
               RegisterTypeService
               ]
})
export class RegisterTypeModule {}