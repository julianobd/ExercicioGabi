import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserEditComponent } from './components/user-edit/user-edit.component'
import { UserDeleteComponent } from  './components/user-delete/user-delete.component';

const routes: Routes = [
  { path: '', component: UsersComponent},
  { path: 'userCreate', component: UserCreateComponent },
  { path: 'userDelete/:userId', component: UserDeleteComponent },
  { path: 'userEdit/:userId', component: UserEditComponent }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
