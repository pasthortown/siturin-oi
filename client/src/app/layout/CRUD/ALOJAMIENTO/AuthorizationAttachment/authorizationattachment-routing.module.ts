import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationAttachmentComponent } from './authorizationattachment.component';

const routes: Routes = [
   {
      path: '',
      component: AuthorizationAttachmentComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class AuthorizationAttachmentRoutingModule {}
