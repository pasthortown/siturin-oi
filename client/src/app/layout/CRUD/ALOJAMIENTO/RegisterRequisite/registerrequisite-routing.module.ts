import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterRequisiteComponent } from './registerrequisite.component';

const routes: Routes = [
   {
      path: '',
      component: RegisterRequisiteComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class RegisterRequisiteRoutingModule {}
