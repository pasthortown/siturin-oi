import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprovalStateAttachmentComponent } from './approvalstateattachment.component';

const routes: Routes = [
   {
      path: '',
      component: ApprovalStateAttachmentComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class ApprovalStateAttachmentRoutingModule {}
