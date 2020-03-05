import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyTitleAttachmentComponent } from './propertytitleattachment.component';

const routes: Routes = [
   {
      path: '',
      component: PropertyTitleAttachmentComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class PropertyTitleAttachmentRoutingModule {}
