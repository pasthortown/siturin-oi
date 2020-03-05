import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CapacityRoutingModule } from './capacity-routing.module';
import { CapacityComponent } from './capacity.component';
import { CapacityService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/capacity.service';
import { environment } from 'src/environments/environment';
import { CapacityTypeService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/capacitytype.service';

@NgModule({
   imports: [CommonModule,
             CapacityRoutingModule,
             FormsModule],
   declarations: [CapacityComponent],
   providers: [
               NgbModal,
               CapacityTypeService,
               CapacityService
               ]
})
export class CapacityModule {}