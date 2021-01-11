import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ServerRoutingModule } from './server-routing.module';
import { ServerListComponent } from './server/server-list/server-list.component';
import { ServerEditComponent } from './server/server-edit/server-edit.component';
import { ServerComponent } from './server.component';
import { NavbarComponent } from './../../core/navbar/navbar.component';
import { TabExpComponent } from './server/tab-exp/tab-exp.component';
import { TabExpCreateComponent } from './server/tab-exp/tab-exp-create/tab-exp-create.component';
import { TabExpDeleteComponent } from './server/tab-exp/tab-exp-delete/tab-exp-delete.component';
import { TabExpUpdateComponent } from './server/tab-exp/tab-exp-update/tab-exp-update.component';


@NgModule({
  declarations: [
    ServerListComponent,
    ServerEditComponent,
    ServerComponent,
    NavbarComponent,
    TabExpComponent,
    TabExpCreateComponent,
    TabExpDeleteComponent,
    TabExpUpdateComponent],
  imports: [
    CommonModule,
    ServerRoutingModule,
    RouterModule,
    ReactiveFormsModule,

  ]
})
export class ServerModule { }
