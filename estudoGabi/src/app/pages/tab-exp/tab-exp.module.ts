import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabExpRoutingModule } from './tab-exp-routing.module';
import { TabExpComponent } from './tab-exp.component';
import { SharedModule } from './../../shared/shared.module';
import { TabExpCreateComponent } from './tab-exp-create/tab-exp-create.component';
import { TabExpEditComponent } from './tab-exp-edit/tab-exp-edit.component';


@NgModule({
  declarations: [TabExpComponent, TabExpCreateComponent, TabExpEditComponent],
  imports: [
    CommonModule,
    TabExpRoutingModule,
    SharedModule
  ]
})
export class TabExpModule { }
