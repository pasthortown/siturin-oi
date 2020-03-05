import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RucComponent } from './ruc.component';

const routes: Routes = [
   {
      path: '',
      component: RucComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class RucRoutingModule {}
