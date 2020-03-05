import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EstablishmentPropertyTypeRoutingModule } from './establishmentpropertytype-routing.module';
import { EstablishmentPropertyTypeComponent } from './establishmentpropertytype.component';
import { EstablishmentPropertyTypeService } from './../../../../services/CRUD/BASE/establishmentpropertytype.service';
import { environment } from 'src/environments/environment';

@NgModule({
   imports: [CommonModule,
             EstablishmentPropertyTypeRoutingModule,
             FormsModule],
   declarations: [EstablishmentPropertyTypeComponent],
   providers: [
               NgbModal,
               EstablishmentPropertyTypeService
               ]
})
export class EstablishmentPropertyTypeModule {}