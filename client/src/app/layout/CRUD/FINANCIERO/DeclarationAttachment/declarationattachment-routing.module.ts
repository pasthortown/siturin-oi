import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeclarationAttachmentComponent } from './declarationattachment.component';

const routes: Routes = [
   {
      path: '',
      component: DeclarationAttachmentComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class DeclarationAttachmentRoutingModule {}
