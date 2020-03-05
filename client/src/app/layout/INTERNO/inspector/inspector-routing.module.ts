import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InspectorComponent } from './inspector.component';

const routes: Routes = [
  {
    path: '',
    component: InspectorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InspectorRoutingModule {}
