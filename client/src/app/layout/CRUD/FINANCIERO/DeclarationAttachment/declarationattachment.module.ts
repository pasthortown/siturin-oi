import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeclarationAttachmentRoutingModule } from './declarationattachment-routing.module';
import { DeclarationAttachmentComponent } from './declarationattachment.component';
import { DeclarationAttachmentService } from './../../../../services/CRUD/FINANCIERO/declarationattachment.service';
import { environment } from 'src/environments/environment';
import { DeclarationService } from './../../../../services/CRUD/FINANCIERO/declaration.service';

@NgModule({
   imports: [CommonModule,
             DeclarationAttachmentRoutingModule,
             FormsModule],
   declarations: [DeclarationAttachmentComponent],
   providers: [
               NgbModal,
               DeclarationService,
               DeclarationAttachmentService
               ]
})
export class DeclarationAttachmentModule {}