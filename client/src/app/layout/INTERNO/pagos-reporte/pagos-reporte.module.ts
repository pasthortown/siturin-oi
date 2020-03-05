import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PagosReporteRoutingModule } from './pagos-reporte-routing.module';
import { PagosReporteComponent } from './pagos-reporte.component';
import { PayService } from 'src/app/services/CRUD/FINANCIERO/pay.service';

@NgModule({
  imports: [
    CommonModule,
    PagosReporteRoutingModule, FormsModule],
  declarations: [PagosReporteComponent],
  providers: [PayService]
})
export class PagosReporteModule {}
