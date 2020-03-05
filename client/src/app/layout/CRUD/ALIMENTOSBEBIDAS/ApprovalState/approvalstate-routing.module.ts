import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprovalStateComponent } from './approvalstate.component';

const routes: Routes = [
   {
      path: '',
      component: ApprovalStateComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class ApprovalStateRoutingModule {}
