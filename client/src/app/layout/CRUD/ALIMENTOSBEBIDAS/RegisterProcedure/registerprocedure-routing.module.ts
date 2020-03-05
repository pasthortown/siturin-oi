import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterProcedureComponent } from './registerprocedure.component';

const routes: Routes = [
   {
      path: '',
      component: RegisterProcedureComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class RegisterProcedureRoutingModule {}
