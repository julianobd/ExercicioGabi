import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'login',  loadChildren:() => import(`./pages/login/login.module`).then(module => module.LoginModule)},
  { path: 'server', loadChildren: () => import('./pages/server/server.module').then(m => m.ServerModule) },
  { path: 'user', loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule) },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
