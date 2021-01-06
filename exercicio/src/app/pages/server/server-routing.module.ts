import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServerListComponent } from './server/server-list/server-list.component';
import { ServerEditComponent } from './server/server-edit/server-edit.component';
import { ServerComponent } from './server.component';



const routes: Routes = [
  { path: '', component: ServerComponent },
  { path: 'serverList', component: ServerListComponent },
  { path: 'serverEdit', component: ServerEditComponent }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServerRoutingModule { }
