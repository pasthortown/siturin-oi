import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ComplementaryServiceFoodRoutingModule } from './complementaryservicefood-routing.module';
import { ComplementaryServiceFoodComponent } from './complementaryservicefood.component';
import { ComplementaryServiceFoodService } from './../../../../services/CRUD/ALOJAMIENTO/complementaryservicefood.service';
import { environment } from 'src/environments/environment';
import { ComplementaryServiceFoodTypeService } from './../../../../services/CRUD/ALOJAMIENTO/complementaryservicefoodtype.service';

@NgModule({
   imports: [CommonModule,
             ComplementaryServiceFoodRoutingModule,
             FormsModule],
   declarations: [ComplementaryServiceFoodComponent],
   providers: [
               NgbModal,
               ComplementaryServiceFoodTypeService,
               ComplementaryServiceFoodService
               ]
})
export class ComplementaryServiceFoodModule {}