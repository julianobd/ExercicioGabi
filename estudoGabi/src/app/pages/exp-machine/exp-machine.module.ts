import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { ExpMachineRoutingModule } from './exp-machine-routing.module';
import { ExpMachineComponent } from './exp-machine.component';
import { ExpMachEditComponent } from './components/exp-mach-edit/exp-mach-edit.component';
import { ExpMachCreateComponent } from './components/exp-mach-create/exp-mach-create.component';


@NgModule({
  declarations: [ExpMachineComponent, ExpMachEditComponent, ExpMachCreateComponent],
  imports: [
    CommonModule,
    ExpMachineRoutingModule,
    SharedModule
  ]
})
export class ExpMachineModule { }
