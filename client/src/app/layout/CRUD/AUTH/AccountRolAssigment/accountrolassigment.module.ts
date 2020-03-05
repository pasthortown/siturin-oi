import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AccountRolAssigmentRoutingModule } from './accountrolassigment-routing.module';
import { AccountRolAssigmentComponent } from './accountrolassigment.component';
import { AccountRolAssigmentService } from './../../../../services/CRUD/AUTH/accountrolassigment.service';
import { environment } from 'src/environments/environment';
import { AccountRolService } from './../../../../services/CRUD/AUTH/accountrol.service';
import { UserService } from './../../../../services/profile/user.service';

@NgModule({
   imports: [CommonModule,
             AccountRolAssigmentRoutingModule,
             FormsModule],
   declarations: [AccountRolAssigmentComponent],
   providers: [
               NgbModal,
               AccountRolService,
               UserService,
               AccountRolAssigmentService
               ]
})
export class AccountRolAssigmentModule {}