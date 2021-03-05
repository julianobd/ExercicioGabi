import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { AvatarRoutingModule } from './avatar-routing.module';
import { AvatarComponent } from './avatar.component';
import { AvatarEditComponent } from './components/avatar-edit/avatar-edit.component';
import { AvatarDeleteComponent } from './components/avatar-delete/avatar-delete.component';
import { AvatarCreateComponent } from './components/avatar-create/avatar-create.component';


@NgModule({
  declarations: [AvatarComponent, AvatarEditComponent, AvatarDeleteComponent, AvatarCreateComponent],
  imports: [
    CommonModule,
    AvatarRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ]
})
export class AvatarModule { }
