import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstablishmentStateComponent } from './establishmentstate.component';

const routes: Routes = [
   {
      path: '',
      component: EstablishmentStateComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class EstablishmentStateRoutingModule {}
