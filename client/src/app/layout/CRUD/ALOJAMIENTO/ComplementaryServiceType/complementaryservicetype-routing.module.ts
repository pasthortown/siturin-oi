import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplementaryServiceTypeComponent } from './complementaryservicetype.component';

const routes: Routes = [
   {
      path: '',
      component: ComplementaryServiceTypeComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class ComplementaryServiceTypeRoutingModule {}
