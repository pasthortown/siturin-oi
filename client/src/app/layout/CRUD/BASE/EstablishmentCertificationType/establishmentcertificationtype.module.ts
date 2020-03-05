import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EstablishmentCertificationTypeRoutingModule } from './establishmentcertificationtype-routing.module';
import { EstablishmentCertificationTypeComponent } from './establishmentcertificationtype.component';
import { EstablishmentCertificationTypeService } from './../../../../services/CRUD/BASE/establishmentcertificationtype.service';
import { environment } from 'src/environments/environment';

@NgModule({
   imports: [CommonModule,
             EstablishmentCertificationTypeRoutingModule,
             FormsModule],
   declarations: [EstablishmentCertificationTypeComponent],
   providers: [
               NgbModal,
               EstablishmentCertificationTypeService
               ]
})
export class EstablishmentCertificationTypeModule {}