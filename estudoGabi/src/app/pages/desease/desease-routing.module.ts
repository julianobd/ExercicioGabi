import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeseaseComponent } from './desease.component';
import { DeseaseEditComponent } from './components/desease-edit/desease-edit.component';
import { DeseaseDeleteComponent } from './components/desease-delete/desease-delete.component';
import { DeseaseCreateComponent } from './components/desease-create/desease-create.component';


const routes: Routes = [
  { path: '', component: DeseaseComponent },
  { path: 'deseaseCreate', component: DeseaseCreateComponent },
  { path: 'deseaseEdit', component: DeseaseEditComponent },
  { path: 'deseaseDelete', component: DeseaseDeleteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeseaseRoutingModule { }
