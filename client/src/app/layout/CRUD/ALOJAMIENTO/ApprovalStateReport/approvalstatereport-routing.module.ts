import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprovalStateReportComponent } from './approvalstatereport.component';

const routes: Routes = [
   {
      path: '',
      component: ApprovalStateReportComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class ApprovalStateReportRoutingModule {}
