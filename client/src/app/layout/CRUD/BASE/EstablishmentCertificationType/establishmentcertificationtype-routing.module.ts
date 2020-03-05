import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstablishmentCertificationTypeComponent } from './establishmentcertificationtype.component';

const routes: Routes = [
   {
      path: '',
      component: EstablishmentCertificationTypeComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class EstablishmentCertificationTypeRoutingModule {}
