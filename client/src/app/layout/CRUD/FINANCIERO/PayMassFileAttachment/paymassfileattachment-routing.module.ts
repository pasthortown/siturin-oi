import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayMassFileAttachmentComponent } from './paymassfileattachment.component';

const routes: Routes = [
   {
      path: '',
      component: PayMassFileAttachmentComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class PayMassFileAttachmentRoutingModule {}
