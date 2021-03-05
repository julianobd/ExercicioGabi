import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpMachineComponent } from './exp-machine.component';
import { ExpMachCreateComponent } from './components/exp-mach-create/exp-mach-create.component';
import { ExpMachEditComponent } from './components/exp-mach-edit/exp-mach-edit.component';

const routes: Routes = [
  { path: '', component: ExpMachineComponent },
  { path: 'expMachCreate', component: ExpMachCreateComponent },
  { path: 'expMachEdit', component: ExpMachEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpMachineRoutingModule { }
