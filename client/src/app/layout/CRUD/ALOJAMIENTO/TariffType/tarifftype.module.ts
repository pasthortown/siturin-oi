import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TariffTypeRoutingModule } from './tarifftype-routing.module';
import { TariffTypeComponent } from './tarifftype.component';
import { TariffTypeService } from './../../../../services/CRUD/ALOJAMIENTO/tarifftype.service';
import { environment } from 'src/environments/environment';

@NgModule({
   imports: [CommonModule,
             TariffTypeRoutingModule,
             FormsModule],
   declarations: [TariffTypeComponent],
   providers: [
               NgbModal,
               TariffTypeService
               ]
})
export class TariffTypeModule {}