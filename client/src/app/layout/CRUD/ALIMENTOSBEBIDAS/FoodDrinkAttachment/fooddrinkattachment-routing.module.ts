import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodDrinkAttachmentComponent } from './fooddrinkattachment.component';

const routes: Routes = [
   {
      path: '',
      component: FoodDrinkAttachmentComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class FoodDrinkAttachmentRoutingModule {}
