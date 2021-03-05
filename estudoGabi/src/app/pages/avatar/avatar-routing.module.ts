import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvatarComponent } from './avatar.component';
import { AvatarDeleteComponent } from './components/avatar-delete/avatar-delete.component';
import { AvatarEditComponent } from './components/avatar-edit/avatar-edit.component';
import { AvatarCreateComponent } from './components/avatar-create/avatar-create.component';


const routes: Routes = [
  { path: '', component: AvatarComponent },
  { path: 'avatarDelete', component: AvatarDeleteComponent },
  { path: 'avatarCreate', component: AvatarCreateComponent },
  { path: 'avatarEdit', component: AvatarEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvatarRoutingModule { }
