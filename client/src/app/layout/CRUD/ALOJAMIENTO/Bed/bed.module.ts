import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BedRoutingModule } from './bed-routing.module';
import { BedComponent } from './bed.component';
import { BedService } from './../../../../services/CRUD/ALOJAMIENTO/bed.service';
import { environment } from 'src/environments/environment';
import { BedTypeService } from './../../../../services/CRUD/ALOJAMIENTO/bedtype.service';
@NgModule({
   imports: [CommonModule,
             BedRoutingModule,
             FormsModule],
   declarations: [BedComponent],
   providers: [
               NgbModal,
               BedTypeService,
               BedService
               ]
})
export class BedModule {}