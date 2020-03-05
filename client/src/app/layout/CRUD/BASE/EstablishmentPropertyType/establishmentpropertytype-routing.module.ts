import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstablishmentPropertyTypeComponent } from './establishmentpropertytype.component';

const routes: Routes = [
   {
      path: '',
      component: EstablishmentPropertyTypeComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class EstablishmentPropertyTypeRoutingModule {}
