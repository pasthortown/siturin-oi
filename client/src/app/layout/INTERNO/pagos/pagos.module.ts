import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PagosRoutingModule } from './pagos-routing.module';
import { PagosComponent } from './pagos.component';
import { PayService } from 'src/app/services/CRUD/FINANCIERO/pay.service';

@NgModule({
  imports: [
    CommonModule,
    PagosRoutingModule, FormsModule],
  declarations: [PagosComponent],
  providers: [PayService]
})
export class PagosModule {}
