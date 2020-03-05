import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayAttachmentComponent } from './payattachment.component';

const routes: Routes = [
   {
      path: '',
      component: PayAttachmentComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class PayAttachmentRoutingModule {}
