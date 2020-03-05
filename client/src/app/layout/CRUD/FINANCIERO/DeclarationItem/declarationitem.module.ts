import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeclarationItemRoutingModule } from './declarationitem-routing.module';
import { DeclarationItemComponent } from './declarationitem.component';
import { DeclarationItemService } from './../../../../services/CRUD/FINANCIERO/declarationitem.service';
import { environment } from 'src/environments/environment';
import { DeclarationItemCategoryService } from './../../../../services/CRUD/FINANCIERO/declarationitemcategory.service';
import { CKEditorModule } from 'ngx-ckeditor';

@NgModule({
   imports: [CommonModule,
             DeclarationItemRoutingModule,
             CKEditorModule,
             FormsModule],
   declarations: [DeclarationItemComponent],
   providers: [
               NgbModal,
               DeclarationItemCategoryService,
               DeclarationItemService
               ]
})
export class DeclarationItemModule {}