import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RucNameTypeComponent } from './rucnametype.component';

const routes: Routes = [
   {
      path: '',
      component: RucNameTypeComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class RucNameTypeRoutingModule {}
