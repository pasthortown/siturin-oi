import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonRepresentativeComponent } from './personrepresentative.component';

const routes: Routes = [
   {
      path: '',
      component: PersonRepresentativeComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class PersonRepresentativeRoutingModule {}
