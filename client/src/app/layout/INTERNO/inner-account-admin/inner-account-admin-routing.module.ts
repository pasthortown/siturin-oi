import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InnerAccountAdminComponent } from './inner-account-admin.component';

const routes: Routes = [
  {
    path: '',
    component: InnerAccountAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InnerAccountAdminRoutingModule {}
