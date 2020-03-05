import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreviewRegisterCodeComponent } from './previewregistercode.component';

const routes: Routes = [
   {
      path: '',
      component: PreviewRegisterCodeComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class PreviewRegisterCodeRoutingModule {}
