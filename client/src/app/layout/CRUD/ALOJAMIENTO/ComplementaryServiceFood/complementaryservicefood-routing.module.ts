import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplementaryServiceFoodComponent } from './complementaryservicefood.component';

const routes: Routes = [
   {
      path: '',
      component: ComplementaryServiceFoodComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class ComplementaryServiceFoodRoutingModule {}
