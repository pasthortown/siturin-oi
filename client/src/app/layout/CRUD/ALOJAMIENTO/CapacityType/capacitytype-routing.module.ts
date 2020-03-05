import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapacityTypeComponent } from './capacitytype.component';

const routes: Routes = [
   {
      path: '',
      component: CapacityTypeComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class CapacityTypeRoutingModule {}
