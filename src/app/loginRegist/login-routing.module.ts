import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard }            from '../globalServices/auth-guard.service';
import { AuthService }          from '../globalServices/auth.service';
import { LoginComponent }       from './login.component';

const loginRoutes: Routes = [
  { path: 'logIn', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class LoginRoutingModule {}
