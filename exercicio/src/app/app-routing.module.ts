import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthGuard } from './guards/auth-guard';

const routes: Routes = [
  {path: 'login',  loadChildren:() => import(`./pages/login/login.module`).then(module => module.LoginModule)},
  { path: 'home/server', loadChildren: () => import('./pages/server/server.module').then(m => m.ServerModule),
  canActivate:[AuthGuard] },
  { path: 'user', loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule),
  canActivate:[AuthGuard] },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  canActivate:[AuthGuard] },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
