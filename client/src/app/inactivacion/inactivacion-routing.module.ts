import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InactivacionComponent } from './inactivacion.component';

const routes: Routes = [
    {
        path: '',
        component: InactivacionComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InactivacionRoutingModule {}
