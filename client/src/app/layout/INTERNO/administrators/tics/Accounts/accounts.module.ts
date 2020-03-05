import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './accounts.component';
import { AccountRolService } from 'src/app/services/CRUD/AUTH/accountrol.service';
import { UbicationService } from 'src/app/services/CRUD/BASE/ubication.service';
import { AccountService } from 'src/app/services/negocio/account.service';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
   imports: [CommonModule,
             AccountsRoutingModule,
             Ng2TableModule,
             NgbModule,
             FormsModule],
   declarations: [AccountsComponent],
   providers: [
               NgbModal,
               AccountRolService,
               AccountService,
               UbicationService
               ]
})
export class AccountsModule {}