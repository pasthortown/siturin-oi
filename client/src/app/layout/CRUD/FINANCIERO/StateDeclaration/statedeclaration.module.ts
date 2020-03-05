import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StateDeclarationRoutingModule } from './statedeclaration-routing.module';
import { StateDeclarationComponent } from './statedeclaration.component';
import { StateDeclarationService } from './../../../../services/CRUD/FINANCIERO/statedeclaration.service';
import { environment } from 'src/environments/environment';
import { DeclarationService } from './../../../../services/CRUD/FINANCIERO/declaration.service';
import { StateService } from './../../../../services/CRUD/FINANCIERO/state.service';
import { CKEditorModule } from 'ngx-ckeditor';

@NgModule({
   imports: [CommonModule,
             StateDeclarationRoutingModule,
             CKEditorModule,
             FormsModule],
   declarations: [StateDeclarationComponent],
   providers: [
               NgbModal,
               DeclarationService,
               StateService,
               StateDeclarationService
               ]
})
export class StateDeclarationModule {}