import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkerGroupComponent } from './workergroup.component';

const routes: Routes = [
   {
      path: '',
      component: WorkerGroupComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class WorkerGroupRoutingModule {}
