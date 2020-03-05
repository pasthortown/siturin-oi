import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TariffTypeComponent } from './tarifftype.component';

const routes: Routes = [
   {
      path: '',
      component: TariffTypeComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class TariffTypeRoutingModule {}
