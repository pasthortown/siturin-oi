import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ComplementaryServiceFoodTypeRoutingModule } from './complementaryservicefoodtype-routing.module';
import { ComplementaryServiceFoodTypeComponent } from './complementaryservicefoodtype.component';
import { ComplementaryServiceFoodTypeService } from './../../../../services/CRUD/ALOJAMIENTO/complementaryservicefoodtype.service';
import { environment } from 'src/environments/environment';

@NgModule({
   imports: [CommonModule,
             ComplementaryServiceFoodTypeRoutingModule,
             FormsModule],
   declarations: [ComplementaryServiceFoodTypeComponent],
   providers: [
               NgbModal,
               ComplementaryServiceFoodTypeService
               ]
})
export class ComplementaryServiceFoodTypeModule {}