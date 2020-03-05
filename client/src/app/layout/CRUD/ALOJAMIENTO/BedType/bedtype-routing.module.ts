import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BedTypeComponent } from './bedtype.component';

const routes: Routes = [
   {
      path: '',
      component: BedTypeComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class BedTypeRoutingModule {}
