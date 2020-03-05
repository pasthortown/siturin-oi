import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoordinadorComponent } from './coordinador.component';

const routes: Routes = [
  {
    path: '',
    component: CoordinadorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoordinadorRoutingModule {}
