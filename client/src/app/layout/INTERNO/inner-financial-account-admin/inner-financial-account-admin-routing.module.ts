import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InnerFinancialAccountAdminComponent } from './inner-financial-account-admin.component';

const routes: Routes = [
  {
    path: '',
    component: InnerFinancialAccountAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InnerFinancialAccountAdminRoutingModule {}
