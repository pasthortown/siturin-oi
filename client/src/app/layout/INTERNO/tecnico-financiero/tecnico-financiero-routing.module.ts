import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TecnicoFinancieroComponent } from './tecnico-financiero.component';

const routes: Routes = [
  {
    path: '',
    component: TecnicoFinancieroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TecnicoFinancieroRoutingModule {}
