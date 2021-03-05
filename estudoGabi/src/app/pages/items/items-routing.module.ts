import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './items.component';
import { ItemsEditComponent } from './components/items-edit/items-edit.component';
import { ItemsDeleteComponent } from './components/items-delete/items-delete.component';
import { ItemsCreateComponent } from './components/items-create/items-create.component'

const routes: Routes = [
  { path: '', component: ItemsComponent },
  { path: 'itemsCreate', component: ItemsCreateComponent },
  { path:'itemsEdit', component:ItemsEditComponent},
  { path: 'itemsDelete', component: ItemsDeleteComponent  },
  { path: 'itemsCreate', component: ItemsCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
