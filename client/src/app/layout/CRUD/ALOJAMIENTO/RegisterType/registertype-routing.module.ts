import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterTypeComponent } from './registertype.component';

const routes: Routes = [
   {
      path: '',
      component: RegisterTypeComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class RegisterTypeRoutingModule {}
