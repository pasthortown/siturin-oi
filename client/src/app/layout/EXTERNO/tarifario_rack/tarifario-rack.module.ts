import { BedTypeService } from './../../../services/CRUD/ALOJAMIENTO/bedtype.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RegisterService } from 'src/app/services/CRUD/ALOJAMIENTO/register.service';
import { TarifarioRackRoutingModule } from './tarifario-rack-routing.module';
import { TarifarioRackComponent } from './tarifario-rack.component';
import { UserService } from 'src/app/services/profile/user.service';
import { StateService } from 'src/app/services/CRUD/ALOJAMIENTO/state.service';
import { RegisterTypeService } from 'src/app/services/CRUD/ALOJAMIENTO/registertype.service';
import { TariffTypeService } from 'src/app/services/CRUD/ALOJAMIENTO/tarifftype.service';
import { CapacityTypeService } from './../../../services/CRUD/ALOJAMIENTO/capacitytype.service';
import { TariffService } from 'src/app/services/CRUD/ALOJAMIENTO/tariff.service';
@NgModule({
  imports: [CommonModule,
    TarifarioRackRoutingModule,
    FormsModule,
    NgbModule,
    Ng2TableModule],
  declarations: [TarifarioRackComponent],
  providers: [RegisterService,
    UserService, 
    StateService, 
    TariffService,
    RegisterTypeService,
    BedTypeService, 
    TariffTypeService,
    CapacityTypeService]
})
export class TarifarioRackModule {}
