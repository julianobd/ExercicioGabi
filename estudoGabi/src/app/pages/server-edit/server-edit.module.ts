import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServerEditRoutingModule } from './server-edit-routing.module';
import { ServerEditComponent } from './server-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ServerEditComponent],
  imports: [
    CommonModule,
    ServerEditRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ServerEditModule { }
