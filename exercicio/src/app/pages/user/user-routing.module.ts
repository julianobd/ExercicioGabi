import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component'
import { UserDeleteComponent } from  './user-delete/user-delete.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'userCreate', component: UserCreateComponent },
  { path: 'userDelete', component: UserDeleteComponent },
  { path: 'userEdit', component: UserEditComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
