import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ServerRoutingModule } from './server-routing.module';
import { ServerListComponent } from './server/server-list/server-list.component';
import { ServerEditComponent } from './server/server-edit/server-edit.component';
import { ServerComponent } from './server.component';
import { NavbarComponent } from './../../core/navbar/navbar.component';


@NgModule({
  declarations: [
    ServerListComponent,
    ServerEditComponent,
    ServerComponent,
    NavbarComponent],
  imports: [
    CommonModule,
    ServerRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class ServerModule { }
