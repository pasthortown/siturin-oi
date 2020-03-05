import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StateDeclarationComponent } from './statedeclaration.component';

const routes: Routes = [
   {
      path: '',
      component: StateDeclarationComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class StateDeclarationRoutingModule {}
