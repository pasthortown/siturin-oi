import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeclarationItemValueComponent } from './declarationitemvalue.component';

const routes: Routes = [
   {
      path: '',
      component: DeclarationItemValueComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class DeclarationItemValueRoutingModule {}
