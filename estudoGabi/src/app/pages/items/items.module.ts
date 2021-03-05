
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './../../shared/shared.module';
import { ItemsCreateComponent } from './components/items-create/items-create.component';
import { ItemsDeleteComponent } from './components/items-delete/items-delete.component';
import { ItemsEditComponent } from './components/items-edit/items-edit.component';


@NgModule({
  declarations: [ItemsComponent, ItemsCreateComponent, ItemsDeleteComponent, ItemsEditComponent],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    SharedModule
  ]
})
export class ItemsModule { }
