import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequisiteComponent } from './requisite.component';

const routes: Routes = [
   {
      path: '',
      component: RequisiteComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class RequisiteRoutingModule {}
