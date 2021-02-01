import { AuthGuard } from './../../guards/auth-guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent,
  children: [
  {path: 'server', loadChildren:() => import(`../server/server.module`).then(m => m.ServerModule), canActivate:[AuthGuard]},
  { path: 'user', loadChildren:()=> import(`../user/user.module`).then(m => m.UserModule), canActivate:[AuthGuard]}
]}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
