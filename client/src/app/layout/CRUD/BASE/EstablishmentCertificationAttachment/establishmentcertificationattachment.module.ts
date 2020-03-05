import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EstablishmentCertificationAttachmentRoutingModule } from './establishmentcertificationattachment-routing.module';
import { EstablishmentCertificationAttachmentComponent } from './establishmentcertificationattachment.component';
import { EstablishmentCertificationAttachmentService } from './../../../../services/CRUD/BASE/establishmentcertificationattachment.service';
import { environment } from 'src/environments/environment';

@NgModule({
   imports: [CommonModule,
             EstablishmentCertificationAttachmentRoutingModule,
             FormsModule],
   declarations: [EstablishmentCertificationAttachmentComponent],
   providers: [
               NgbModal,
               EstablishmentCertificationAttachmentService
               ]
})
export class EstablishmentCertificationAttachmentModule {}