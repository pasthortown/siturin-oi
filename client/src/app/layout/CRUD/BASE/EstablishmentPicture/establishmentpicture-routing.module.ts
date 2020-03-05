import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstablishmentPictureComponent } from './establishmentpicture.component';

const routes: Routes = [
   {
      path: '',
      component: EstablishmentPictureComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class EstablishmentPictureRoutingModule {}
