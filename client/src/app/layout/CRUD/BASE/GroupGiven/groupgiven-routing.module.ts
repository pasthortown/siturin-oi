import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupGivenComponent } from './groupgiven.component';

const routes: Routes = [
   {
      path: '',
      component: GroupGivenComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class GroupGivenRoutingModule {}
