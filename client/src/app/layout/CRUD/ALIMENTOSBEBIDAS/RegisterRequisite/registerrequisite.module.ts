import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterRequisiteRoutingModule } from './registerrequisite-routing.module';
import { RegisterRequisiteComponent } from './registerrequisite.component';
import { RegisterRequisiteService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/registerrequisite.service';
import { environment } from 'src/environments/environment';
import { RequisiteService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/requisite.service';
import { RegisterService } from './../../../../services/CRUD/ALIMENTOSBEBIDAS/register.service';

@NgModule({
   imports: [CommonModule,
             RegisterRequisiteRoutingModule,
             FormsModule],
   declarations: [RegisterRequisiteComponent],
   providers: [
               NgbModal,
               RequisiteService,
               RegisterService,
               RegisterRequisiteService
               ]
})
export class RegisterRequisiteModule {}