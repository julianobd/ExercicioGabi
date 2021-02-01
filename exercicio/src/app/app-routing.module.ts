import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthGuard } from './guards/auth-guard';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo: 'login'},
  {path: 'login',  loadChildren:() => import(`./pages/login/login.module`).then(module => module.LoginModule)},
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  canActivate:[AuthGuard] },
  { path: 'home-list', loadChildren: () => import('./pages/home-list/home-list.module').then(m => m.HomeListModule), canActivate:[AuthGuard]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
