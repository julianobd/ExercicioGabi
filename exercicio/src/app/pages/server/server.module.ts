import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { ServerRoutingModule } from './server-routing.module';
import { ServerListComponent } from './server/server-list/server-list.component';
import { ServerEditComponent } from './server/server-edit/server-edit.component';
import { ServerComponent } from './server.component';
import { NavbarComponent } from './../../core/navbar/navbar.component';
import { TabExpComponent } from './server/tab-exp/tab-exp.component';
import { TabExpCreateComponent } from './server/tab-exp/tab-exp-create/tab-exp-create.component';
import { TabExpDeleteComponent } from './server/tab-exp/tab-exp-delete/tab-exp-delete.component';
import { TabExpUpdateComponent } from './server/tab-exp/tab-exp-update/tab-exp-update.component';
import { ParcelsComponent } from './server/parcels/parcels.component';
import { AvailableItemsComponent } from './server/available-items/available-items.component';
import { ParcelEditComponent } from './server/parcels/parcel-edit/parcel-edit.component';
import { AvailableItemsEditComponent } from './server/available-items/available-items-edit/available-items-edit.component';
import { ServerCreateComponent } from './server/server-create/server-create.component';
import { AvatarComponent } from './server/avatar/avatar.component';
import { AvatarEditComponent } from './server/avatar/avatar-edit/avatar-edit.component';
import { AvatarDeleteComponent } from './server/avatar/avatar-delete/avatar-delete.component';
import { ExpMachineComponent } from './server/exp-machine/exp-machine.component';
import { ExpMachineEditComponent } from './server/exp-machine/exp-machine-edit/exp-machine-edit.component';
import { JobsComponent } from './server/jobs/jobs.component';
import { JobCreateComponent } from './server/jobs/job-create/job-create.component';
import { JobEditComponent } from './server/jobs/job-edit/job-edit.component';
import { JobDeleteComponent } from './server/jobs/job-delete/job-delete.component';
import { DeseaseComponent } from './server/desease/desease.component';
import { DeseaseEditComponent } from './server/desease/desease-edit/desease-edit.component';
import { DeseaseCreateComponent } from './server/desease/desease-create/desease-create.component';
import { DeseaseDeleteComponent } from './server/desease/desease-delete/desease-delete.component';


@NgModule({
  declarations: [
    ServerListComponent,
    ServerEditComponent,
    ServerComponent,
    NavbarComponent,
    TabExpComponent,
    TabExpCreateComponent,
    TabExpDeleteComponent,
    TabExpUpdateComponent,
    ParcelsComponent,
    AvailableItemsComponent,
    ParcelEditComponent,
    AvailableItemsEditComponent,
    ServerCreateComponent,
    AvatarComponent,
    AvatarEditComponent,
    AvatarDeleteComponent,
    ExpMachineComponent,
    ExpMachineEditComponent,
    JobsComponent,
    JobCreateComponent,
    JobEditComponent,
    JobDeleteComponent,
    DeseaseComponent,
    DeseaseEditComponent,
    DeseaseCreateComponent,
    DeseaseDeleteComponent],
  imports: [
    CommonModule,
    ServerRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class ServerModule { }
