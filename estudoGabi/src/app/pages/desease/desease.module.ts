import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeseaseRoutingModule } from './desease-routing.module';
import { DeseaseComponent } from './desease.component';
import { SharedModule } from './../../shared/shared.module';
import { DeseaseCreateComponent } from './components/desease-create/desease-create.component';
import { DeseaseEditComponent } from './components/desease-edit/desease-edit.component';
import { DeseaseDeleteComponent } from './components/desease-delete/desease-delete.component';


@NgModule({
  declarations: [DeseaseComponent, DeseaseCreateComponent, DeseaseEditComponent, DeseaseDeleteComponent],
  imports: [
    CommonModule,
    DeseaseRoutingModule,
    SharedModule
  ]
})
export class DeseaseModule { }
