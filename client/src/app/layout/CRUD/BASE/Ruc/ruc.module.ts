import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RucRoutingModule } from './ruc-routing.module';
import { RucComponent } from './ruc.component';
import { RucService } from './../../../../services/CRUD/BASE/ruc.service';
import { environment } from 'src/environments/environment';
import { TaxPayerTypeService } from './../../../../services/CRUD/BASE/taxpayertype.service';

@NgModule({
   imports: [CommonModule,
             RucRoutingModule,
             FormsModule],
   declarations: [RucComponent],
   providers: [
               NgbModal,
               TaxPayerTypeService,
               RucService
               ]
})
export class RucModule {}