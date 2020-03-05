import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PayTaxRoutingModule } from './paytax-routing.module';
import { PayTaxComponent } from './paytax.component';
import { PayTaxService } from './../../../../services/CRUD/FINANCIERO/paytax.service';
import { environment } from 'src/environments/environment';

@NgModule({
   imports: [CommonModule,
             PayTaxRoutingModule,
             FormsModule],
   declarations: [PayTaxComponent],
   providers: [
               NgbModal,
               PayTaxService
               ]
})
export class PayTaxModule {}