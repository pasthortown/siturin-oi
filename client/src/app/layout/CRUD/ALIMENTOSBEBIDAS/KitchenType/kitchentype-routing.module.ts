import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KitchenTypeComponent } from './kitchentype.component';

const routes: Routes = [
   {
      path: '',
      component: KitchenTypeComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class KitchenTypeRoutingModule {}
