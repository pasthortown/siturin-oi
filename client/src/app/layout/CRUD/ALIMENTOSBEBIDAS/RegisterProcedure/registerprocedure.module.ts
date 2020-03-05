import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterProcedureRoutingModule } from './registerprocedure-routing.module';
import { RegisterProcedureComponent } from './registerprocedure.component';
import { RegisterProcedureService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/registerprocedure.service';
import { environment } from 'src/environments/environment';
import { RegisterService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/register.service';
import { ProcedureJustificationService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/procedurejustification.service';

@NgModule({
   imports: [CommonModule,
             RegisterProcedureRoutingModule,
             FormsModule],
   declarations: [RegisterProcedureComponent],
   providers: [
               NgbModal,
               RegisterService,
               ProcedureJustificationService,
               RegisterProcedureService
               ]
})
export class RegisterProcedureModule {}