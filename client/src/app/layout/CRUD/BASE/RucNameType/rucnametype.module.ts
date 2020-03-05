import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RucNameTypeRoutingModule } from './rucnametype-routing.module';
import { RucNameTypeComponent } from './rucnametype.component';
import { RucNameTypeService } from './../../../../services/CRUD/BASE/rucnametype.service';
import { environment } from 'src/environments/environment';
import { CKEditorModule } from 'ngx-ckeditor';

@NgModule({
   imports: [CommonModule,
             RucNameTypeRoutingModule,
             CKEditorModule,
             FormsModule],
   declarations: [RucNameTypeComponent],
   providers: [
               NgbModal,
               RucNameTypeService
               ]
})
export class RucNameTypeModule {}