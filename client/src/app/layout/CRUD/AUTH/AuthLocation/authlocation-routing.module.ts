import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLocationComponent } from './authlocation.component';

const routes: Routes = [
   {
      path: '',
      component: AuthLocationComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class AuthLocationRoutingModule {}
