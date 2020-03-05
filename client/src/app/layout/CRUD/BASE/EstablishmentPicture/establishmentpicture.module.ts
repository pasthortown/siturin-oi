import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EstablishmentPictureRoutingModule } from './establishmentpicture-routing.module';
import { EstablishmentPictureComponent } from './establishmentpicture.component';
import { EstablishmentPictureService } from './../../../../services/CRUD/BASE/establishmentpicture.service';
import { environment } from 'src/environments/environment';
import { EstablishmentService } from './../../../../services/CRUD/BASE/establishment.service';

@NgModule({
   imports: [CommonModule,
             EstablishmentPictureRoutingModule,
             FormsModule],
   declarations: [EstablishmentPictureComponent],
   providers: [
               NgbModal,
               EstablishmentService,
               EstablishmentPictureService
               ]
})
export class EstablishmentPictureModule {}