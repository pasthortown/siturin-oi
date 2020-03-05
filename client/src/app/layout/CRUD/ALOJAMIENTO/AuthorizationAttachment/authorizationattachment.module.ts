import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthorizationAttachmentRoutingModule } from './authorizationattachment-routing.module';
import { AuthorizationAttachmentComponent } from './authorizationattachment.component';
import { AuthorizationAttachmentService } from './../../../../services/CRUD/ALOJAMIENTO/authorizationattachment.service';
import { environment } from 'src/environments/environment';
import { RegisterService } from './../../../../services/CRUD/ALOJAMIENTO/register.service';

@NgModule({
   imports: [CommonModule,
             AuthorizationAttachmentRoutingModule,
             FormsModule],
   declarations: [AuthorizationAttachmentComponent],
   providers: [
               NgbModal,
               RegisterService,
               AuthorizationAttachmentService
               ]
})
export class AuthorizationAttachmentModule {}