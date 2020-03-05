import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonRepresentativeAttachmentComponent } from './personrepresentativeattachment.component';

const routes: Routes = [
   {
      path: '',
      component: PersonRepresentativeAttachmentComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class PersonRepresentativeAttachmentRoutingModule {}
