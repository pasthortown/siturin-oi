import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceTypeRoutingModule } from './servicetype-routing.module';
import { ServiceTypeComponent } from './servicetype.component';
import { ServiceTypeService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/servicetype.service';
import { environment } from 'src/environments/environment';
import { RegisterTypeService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/registertype.service';

@NgModule({
   imports: [CommonModule,
             ServiceTypeRoutingModule,
             FormsModule],
   declarations: [ServiceTypeComponent],
   providers: [
               NgbModal,
               RegisterTypeService,
               ServiceTypeService
               ]
})
export class ServiceTypeModule {}