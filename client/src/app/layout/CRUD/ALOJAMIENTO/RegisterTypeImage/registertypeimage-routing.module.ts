import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterTypeImageComponent } from './registertypeimage.component';

const routes: Routes = [
   {
      path: '',
      component: RegisterTypeImageComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class RegisterTypeImageRoutingModule {}
