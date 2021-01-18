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
    AvatarDeleteComponent],
  imports: [
    CommonModule,
    ServerRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class ServerModule { }
