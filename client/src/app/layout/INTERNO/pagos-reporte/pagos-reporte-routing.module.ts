import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagosReporteComponent } from './pagos-reporte.component';

const routes: Routes = [
  {
    path: '',
    component: PagosReporteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagosReporteRoutingModule {}
