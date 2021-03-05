import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServerEditComponent } from './server-edit.component';

const routes: Routes = [{ path: '', component: ServerEditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServerEditRoutingModule { }
