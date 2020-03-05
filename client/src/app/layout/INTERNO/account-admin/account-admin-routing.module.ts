import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountAdminComponent } from './account-admin.component';

const routes: Routes = [
  {
    path: '',
    component: AccountAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountAdminRoutingModule {}
