import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SystemNameRoutingModule } from './systemname-routing.module';
import { SystemNameComponent } from './systemname.component';
import { SystemNameService } from './../../../../services/CRUD/BASE/systemname.service';
import { environment } from 'src/environments/environment';

@NgModule({
   imports: [CommonModule,
             SystemNameRoutingModule,
             FormsModule],
   declarations: [SystemNameComponent],
   providers: [
               NgbModal,
               SystemNameService
               ]
})
export class SystemNameModule {}