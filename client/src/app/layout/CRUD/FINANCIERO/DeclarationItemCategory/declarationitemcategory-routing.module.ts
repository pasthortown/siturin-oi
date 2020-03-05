import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeclarationItemCategoryComponent } from './declarationitemcategory.component';

const routes: Routes = [
   {
      path: '',
      component: DeclarationItemCategoryComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class DeclarationItemCategoryRoutingModule {}
