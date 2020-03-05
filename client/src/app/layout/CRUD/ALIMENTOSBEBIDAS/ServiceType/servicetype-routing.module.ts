import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceTypeComponent } from './servicetype.component';

const routes: Routes = [
   {
      path: '',
      component: ServiceTypeComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class ServiceTypeRoutingModule {}
