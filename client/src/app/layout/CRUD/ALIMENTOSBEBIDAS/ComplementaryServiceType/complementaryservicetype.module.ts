import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ComplementaryServiceTypeRoutingModule } from './complementaryservicetype-routing.module';
import { ComplementaryServiceTypeComponent } from './complementaryservicetype.component';
import { ComplementaryServiceTypeService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/complementaryservicetype.service';
import { environment } from 'src/environments/environment';
import { CKEditorModule } from 'ngx-ckeditor';

@NgModule({
   imports: [CommonModule,
             ComplementaryServiceTypeRoutingModule,
             CKEditorModule,
             FormsModule],
   declarations: [ComplementaryServiceTypeComponent],
   providers: [
               NgbModal,
               ComplementaryServiceTypeService
               ]
})
export class ComplementaryServiceTypeModule {}