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
import { ExpMachineEditComponent } from './server/exp-machine/exp-machine-edit/exp-machine-edit.component';
import { JobsComponent } from './server/jobs/jobs.component';
import { JobCreateComponent } from './server/jobs/job-create/job-create.component';
import { JobEditComponent } from './server/jobs/job-edit/job-edit.component';
import { JobDeleteComponent } from './server/jobs/job-delete/job-delete.component';
import { DeseaseComponent } from './server/desease/desease.component';
import { DeseaseEditComponent } from './server/desease/desease-edit/desease-edit.component';
import { DeseaseDeleteComponent } from './server/desease/desease-delete/desease-delete.component';
import { DeseaseCreateComponent } from './server/desease/desease-create/desease-create.component';



const routes: Routes = [
  { path: '', component: ServerComponent ,
  children:[

  { path: 'serverList', component: ServerListComponent },
  { path: ':id/serverEdit', component: ServerEditComponent },
  { path: ':id/tabExp', component: TabExpComponent },
  { path: 'tabExp/deleteExp', component: TabExpDeleteComponent },
  { path: ':id/tabExp/edit/:expId', component: TabExpUpdateComponent },
  { path: ':id/parcels', component: ParcelsComponent },
  { path: ':id/parcels/editParcel/:parcId', component: ParcelEditComponent },
  { path: ':id/avbitems', component:AvailableItemsComponent },
  { path: ':id/avbitems/editAvb/:avbId', component:AvailableItemsEditComponent},
  { path: 'serverCreate', component: ServerCreateComponent},
  { path: 'serverCreate/:id/tabExp/createTabExp', component: TabExpCreateComponent},
  {  path: ':id/avatar', component: AvatarComponent},
  { path: ':id/avatar/editAvatar/:avatarId', component: AvatarEditComponent},
  {  path:':id/expMachine', component: ExpMachineComponent },
  {  path: ':id/expMachine/expMachEdit/:idMach', component: ExpMachineEditComponent},
  { path: ':id/jobs', component: JobsComponent},
  { path: ':id/jobs/jobEdit/:jobId', component: JobEditComponent},
  { path: ':id/jobs/jobCreate', component: JobCreateComponent },
  { path: ':id/jobs/jobDelete/:jobId', component: JobDeleteComponent},
  { path: ':id/desease', component: DeseaseComponent},
  { path: ':id/desease/deseaseCreate', component: DeseaseCreateComponent },
  { path: ':id/desease/deseaseEdit/:deseaseId', component: DeseaseEditComponent },
  { path: ':id/desease/deseaseDelete/:deseaseId', component: DeseaseDeleteComponent }
  ]
},




];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServerRoutingModule { }
