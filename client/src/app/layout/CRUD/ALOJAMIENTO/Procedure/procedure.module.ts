import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProcedureRoutingModule } from './procedure-routing.module';
import { ProcedureComponent } from './procedure.component';
import { ProcedureService } from './../../../../services/CRUD/ALOJAMIENTO/procedure.service';
import { environment } from 'src/environments/environment';

@NgModule({
   imports: [CommonModule,
             ProcedureRoutingModule,
             FormsModule],
   declarations: [ProcedureComponent],
   providers: [
               NgbModal,
               ProcedureService
               ]
})
export class ProcedureModule {}