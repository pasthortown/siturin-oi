import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UbicationComponent } from './ubication.component';

const routes: Routes = [
   {
      path: '',
      component: UbicationComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class UbicationRoutingModule {}
