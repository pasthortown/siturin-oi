import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceptionRoomComponent } from './receptionroom.component';

const routes: Routes = [
   {
      path: '',
      component: ReceptionRoomComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class ReceptionRoomRoutingModule {}
