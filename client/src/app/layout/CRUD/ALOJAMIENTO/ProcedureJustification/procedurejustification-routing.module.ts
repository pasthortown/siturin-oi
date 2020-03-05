import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcedureJustificationComponent } from './procedurejustification.component';

const routes: Routes = [
   {
      path: '',
      component: ProcedureJustificationComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class ProcedureJustificationRoutingModule {}
