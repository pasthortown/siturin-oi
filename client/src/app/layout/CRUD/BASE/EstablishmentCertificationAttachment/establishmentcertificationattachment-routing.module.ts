import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstablishmentCertificationAttachmentComponent } from './establishmentcertificationattachment.component';

const routes: Routes = [
   {
      path: '',
      component: EstablishmentCertificationAttachmentComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class EstablishmentCertificationAttachmentRoutingModule {}
