import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CapacityTypeRoutingModule } from './capacitytype-routing.module';
import { CapacityTypeComponent } from './capacitytype.component';
import { CapacityTypeService } from './../../../../services/CRUD/ALOJAMIENTO/capacitytype.service';
import { environment } from 'src/environments/environment';
import { RegisterTypeService } from './../../../../services/CRUD/ALOJAMIENTO/registertype.service';
import { CKEditorModule } from 'ngx-ckeditor';

@NgModule({
   imports: [CommonModule,
             CapacityTypeRoutingModule,
             CKEditorModule,
             FormsModule],
   declarations: [CapacityTypeComponent],
   providers: [
               NgbModal,
               RegisterTypeService,
               CapacityTypeService
               ]
})
export class CapacityTypeModule {}