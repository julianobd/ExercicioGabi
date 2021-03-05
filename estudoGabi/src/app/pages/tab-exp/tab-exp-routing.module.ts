
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabExpComponent } from './tab-exp.component';
import { TabExpEditComponent } from './tab-exp-edit/tab-exp-edit.component';
import { TabExpCreateComponent } from './tab-exp-create/tab-exp-create.component';


const routes: Routes = [
  { path: '', component: TabExpComponent },
  { path: 'tabExpEdit', component: TabExpEditComponent },
  { path: 'tabExpCreate', component: TabExpCreateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabExpRoutingModule { }
