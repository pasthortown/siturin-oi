import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GroupTypeRoutingModule } from './grouptype-routing.module';
import { GroupTypeComponent } from './grouptype.component';
import { GroupTypeService } from './../../../../services/CRUD/BASE/grouptype.service';
import { environment } from 'src/environments/environment';
import { CKEditorModule } from 'ngx-ckeditor';

@NgModule({
   imports: [CommonModule,
             GroupTypeRoutingModule,
             CKEditorModule,
             FormsModule],
   declarations: [GroupTypeComponent],
   providers: [
               NgbModal,
               GroupTypeService
               ]
})
export class GroupTypeModule {}