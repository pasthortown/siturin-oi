import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FloorAuthorizationCertificateComponent } from './floorauthorizationcertificate.component';

const routes: Routes = [
   {
      path: '',
      component: FloorAuthorizationCertificateComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class FloorAuthorizationCertificateRoutingModule {}
