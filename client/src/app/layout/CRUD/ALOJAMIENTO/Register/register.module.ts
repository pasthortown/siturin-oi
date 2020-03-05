import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { RegisterService } from './../../../../services/CRUD/ALOJAMIENTO/register.service';
import { environment } from 'src/environments/environment';
import { ComplementaryServiceTypeService } from './../../../../services/CRUD/ALOJAMIENTO/complementaryservicetype.service';
import { RegisterTypeService } from './../../../../services/CRUD/ALOJAMIENTO/registertype.service';
import { CapacityService } from './../../../../services/CRUD/ALOJAMIENTO/capacity.service';
import { ComplementaryServiceFoodService } from './../../../../services/CRUD/ALOJAMIENTO/complementaryservicefood.service';

@NgModule({
   imports: [CommonModule,
             RegisterRoutingModule,
             FormsModule],
   declarations: [RegisterComponent],
   providers: [
               NgbModal,
               ComplementaryServiceTypeService,
               RegisterTypeService,
               CapacityService,
               ComplementaryServiceFoodService,
               RegisterService
               ]
})
export class RegisterModule {}