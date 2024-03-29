import { AuthGuard } from './components/guard/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
      path: 'login',
      loadChildren: './login/login.module#LoginModule'
  },
  {
      path: 'register',
      loadChildren: './register/register.module#RegisterModule'
  },
  {
      path: 'inactivacion',
      loadChildren: './inactivacion/inactivacion.module#InactivacionModule'
  },
  {
      path: 'password-recovery',
      loadChildren: './password-recovery/password-recovery.module#PasswordRecoveryModule'
  },
  {
      path: '',
      loadChildren: './layout/layout.module#LayoutModule',
      canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
