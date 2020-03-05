import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterStateComponent } from './registerstate.component';

const routes: Routes = [
   {
      path: '',
      component: RegisterStateComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class RegisterStateRoutingModule {}
