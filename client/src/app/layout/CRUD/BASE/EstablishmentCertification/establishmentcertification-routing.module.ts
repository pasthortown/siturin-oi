import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstablishmentCertificationComponent } from './establishmentcertification.component';

const routes: Routes = [
   {
      path: '',
      component: EstablishmentCertificationComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class EstablishmentCertificationRoutingModule {}
