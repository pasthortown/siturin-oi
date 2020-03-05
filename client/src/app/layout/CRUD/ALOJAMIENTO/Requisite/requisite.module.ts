import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RequisiteRoutingModule } from './requisite-routing.module';
import { RequisiteComponent } from './requisite.component';
import { RequisiteService } from './../../../../services/CRUD/ALOJAMIENTO/requisite.service';
import { environment } from 'src/environments/environment';
import { RegisterTypeService } from './../../../../services/CRUD/ALOJAMIENTO/registertype.service';
import { CKEditorModule } from 'ngx-ckeditor';

@NgModule({
   imports: [CommonModule,
             RequisiteRoutingModule,
             CKEditorModule,
             FormsModule],
   declarations: [RequisiteComponent],
   providers: [
               NgbModal,
               RegisterTypeService,
               RequisiteService
               ]
})
export class RequisiteModule {}