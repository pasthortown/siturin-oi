import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BedTypeRoutingModule } from './bedtype-routing.module';
import { BedTypeComponent } from './bedtype.component';
import { BedTypeService } from './../../../../services/CRUD/ALOJAMIENTO/bedtype.service';
import { environment } from 'src/environments/environment';
import { RegisterTypeService } from './../../../../services/CRUD/ALOJAMIENTO/registertype.service';

@NgModule({
   imports: [CommonModule,
             BedTypeRoutingModule,
             FormsModule],
   declarations: [BedTypeComponent],
   providers: [
               NgbModal,
               RegisterTypeService,
               BedTypeService
               ]
})
export class BedTypeModule {}