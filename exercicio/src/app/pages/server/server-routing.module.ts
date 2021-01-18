import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServerListComponent } from './server/server-list/server-list.component';
import { ServerEditComponent } from './server/server-edit/server-edit.component';
import { ServerComponent } from './server.component';
import { TabExpComponent } from './server/tab-exp/tab-exp.component'
import { TabExpDeleteComponent } from './server/tab-exp/tab-exp-delete/tab-exp-delete.component';
import { TabExpUpdateComponent } from './server/tab-exp/tab-exp-update/tab-exp-update.component';
import { ParcelsComponent } from './server/parcels/parcels.component';
import { ParcelEditComponent } from './server/parcels/parcel-edit/parcel-edit.component';
import { AvailableItemsComponent } from './server/available-items/available-items.component';
import { AvailableItemsEditComponent } from './server/available-items/available-items-edit/available-items-edit.component';
import { ServerCreateComponent } from './server/server-create/server-create.component';
import { TabExpCreateComponent } from './server/tab-exp/tab-exp-create/tab-exp-create.component';
import { AvatarComponent } from './server/avatar/avatar.component';
import { AvatarEditComponent } from './server/avatar/avatar-edit/avatar-edit.component';
import { ExpMachineComponent } from './server/exp-machine/exp-machine.component';
import { ExpMachineEditComponent } from './server/exp-machine/exp-machine-edit/exp-machine-edit.component'


const routes: Routes = [
  { path: '', component: ServerComponent },
  { path: 'serverList', component: ServerListComponent },
  { path: 'serverEdit', component: ServerEditComponent },
  { path: ':id/tabExp', component: TabExpComponent },
  { path: 'tabExp/deleteExp', component: TabExpDeleteComponent },
  { path: ':id/tabExp/edit/:expId', component: TabExpUpdateComponent },
  { path: ':id/parcels', component: ParcelsComponent },
  { path: ':id/parcels/editParcel/:parcId', component: ParcelEditComponent },
  { path: ':id/avbitems', component:AvailableItemsComponent },
  { path: ':id/avbitems/editAvb/:avbId', component:AvailableItemsEditComponent},
  { path: 'serverCreate', component: ServerCreateComponent},
  { path: 'serverCreate/:id/tabExp/createTabExp', component: TabExpCreateComponent},
  {path: ':id/avatar', component: AvatarComponent},
  { path: ':id/avatar/editAvatar/:avatarId', component: AvatarEditComponent},
  {path:':id/expMachine', component: ExpMachineComponent },
  {path: ':id/expMachine/expMachEdit/:idMach', component: ExpMachineEditComponent}

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServerRoutingModule { }
