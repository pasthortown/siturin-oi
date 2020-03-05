import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { RegisterService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/register.service';
import { environment } from 'src/environments/environment';
import { ComplementaryServiceTypeService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/complementaryservicetype.service';
import { RegisterTypeService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/registertype.service';
import { CapacityService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/capacity.service';
import { KitchenTypeService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/kitchentype.service';
import { ServiceTypeService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/servicetype.service';

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
               KitchenTypeService,
               ServiceTypeService,
               RegisterService
               ]
})
export class RegisterModule {}