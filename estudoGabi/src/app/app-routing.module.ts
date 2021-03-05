
import { AuthGuard } from './core/guards/auth-guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'server', loadChildren: () => import('./pages/server/server.module').then(m => m.ServerModule), canActivate:[AuthGuard] },
  { path:'', pathMatch:'full', redirectTo:'login'},
  { path: 'app-container', loadChildren: () => import('./pages/app-container/app-container.module').then(m => m.AppContainerModule) },
  { path: 'tabExp', loadChildren: () => import('./pages/tab-exp/tab-exp.module').then(m => m.TabExpModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
