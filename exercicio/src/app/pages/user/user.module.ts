import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserComponent } from './user.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { AuthGuard } from '../../guards/auth-guard';


@NgModule({
  declarations: [
    UserComponent,
    UserCreateComponent,
    UserDeleteComponent,
    UserEditComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[
    AuthGuard
  ]
})
export class UserModule { }
