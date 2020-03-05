import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupTypeComponent } from './grouptype.component';

const routes: Routes = [
   {
      path: '',
      component: GroupTypeComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class GroupTypeRoutingModule {}
