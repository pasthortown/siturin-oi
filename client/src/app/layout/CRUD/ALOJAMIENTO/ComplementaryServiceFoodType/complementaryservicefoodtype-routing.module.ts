import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplementaryServiceFoodTypeComponent } from './complementaryservicefoodtype.component';

const routes: Routes = [
   {
      path: '',
      component: ComplementaryServiceFoodTypeComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class ComplementaryServiceFoodTypeRoutingModule {}
