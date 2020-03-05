import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TarifarioRackComponent } from './tarifario-rack.component';

const routes: Routes = [
  {
    path: '',
    component: TarifarioRackComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TarifarioRackRoutingModule {}
