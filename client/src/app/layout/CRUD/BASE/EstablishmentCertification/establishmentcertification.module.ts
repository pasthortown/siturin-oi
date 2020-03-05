import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EstablishmentCertificationRoutingModule } from './establishmentcertification-routing.module';
import { EstablishmentCertificationComponent } from './establishmentcertification.component';
import { EstablishmentCertificationService } from './../../../../services/CRUD/BASE/establishmentcertification.service';
import { environment } from 'src/environments/environment';
import { EstablishmentCertificationTypeService } from './../../../../services/CRUD/BASE/establishmentcertificationtype.service';
import { EstablishmentCertificationAttachmentService } from './../../../../services/CRUD/BASE/establishmentcertificationattachment.service';

@NgModule({
   imports: [CommonModule,
             EstablishmentCertificationRoutingModule,
             FormsModule],
   declarations: [EstablishmentCertificationComponent],
   providers: [
               NgbModal,
               EstablishmentCertificationTypeService,
               EstablishmentCertificationAttachmentService,
               EstablishmentCertificationService
               ]
})
export class EstablishmentCertificationModule {}