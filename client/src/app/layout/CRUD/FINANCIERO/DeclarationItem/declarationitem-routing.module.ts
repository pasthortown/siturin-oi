import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeclarationItemComponent } from './declarationitem.component';

const routes: Routes = [
   {
      path: '',
      component: DeclarationItemComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class DeclarationItemRoutingModule {}
