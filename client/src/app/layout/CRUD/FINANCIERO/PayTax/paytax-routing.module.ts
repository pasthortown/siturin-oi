import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayTaxComponent } from './paytax.component';

const routes: Routes = [
   {
      path: '',
      component: PayTaxComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class PayTaxRoutingModule {}
