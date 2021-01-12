import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServerListComponent } from './server/server-list/server-list.component';
import { ServerEditComponent } from './server/server-edit/server-edit.component';
import { ServerComponent } from './server.component';
import { TabExpComponent } from './server/tab-exp/tab-exp.component'
import { TabExpDeleteComponent } from './server/tab-exp/tab-exp-delete/tab-exp-delete.component';
import { TabExpUpdateComponent } from './server/tab-exp/tab-exp-update/tab-exp-update.component';
import { ParcelsComponent } from './server/parcels/parcels.component';



const routes: Routes = [
  { path: '', component: ServerComponent },
  { path: 'serverList', component: ServerListComponent },
  { path: 'serverEdit', component: ServerEditComponent },
  { path: ':id/tabExp', component: TabExpComponent },
  { path: 'tabExp/deleteExp', component: TabExpDeleteComponent },
  { path: ':id/tabExp/edit/:expId', component: TabExpUpdateComponent },
  { path: 'serverEdit/parcels/:parcId', component: ParcelsComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServerRoutingModule { }
