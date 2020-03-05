import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeclarationItemCategoryRoutingModule } from './declarationitemcategory-routing.module';
import { DeclarationItemCategoryComponent } from './declarationitemcategory.component';
import { DeclarationItemCategoryService } from './../../../../services/CRUD/FINANCIERO/declarationitemcategory.service';
import { environment } from 'src/environments/environment';
import { CKEditorModule } from 'ngx-ckeditor';

@NgModule({
   imports: [CommonModule,
             DeclarationItemCategoryRoutingModule,
             CKEditorModule,
             FormsModule],
   declarations: [DeclarationItemCategoryComponent],
   providers: [
               NgbModal,
               DeclarationItemCategoryService
               ]
})
export class DeclarationItemCategoryModule {}