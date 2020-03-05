import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemNameComponent } from './systemname.component';

const routes: Routes = [
   {
      path: '',
      component: SystemNameComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class SystemNameRoutingModule {}
