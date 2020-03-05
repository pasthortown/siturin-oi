import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { KitchenTypeRoutingModule } from './kitchentype-routing.module';
import { KitchenTypeComponent } from './kitchentype.component';
import { KitchenTypeService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/kitchentype.service';
import { environment } from 'src/environments/environment';
import { RegisterTypeService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/registertype.service';

@NgModule({
   imports: [CommonModule,
             KitchenTypeRoutingModule,
             FormsModule],
   declarations: [KitchenTypeComponent],
   providers: [
               NgbModal,
               RegisterTypeService,
               KitchenTypeService
               ]
})
export class KitchenTypeModule {}