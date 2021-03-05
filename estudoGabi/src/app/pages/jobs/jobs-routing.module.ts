import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobsComponent } from './jobs.component';
import { JobsEditComponent } from './components/jobs-edit/jobs-edit.component';
import { JobsDeleteComponent } from './components/jobs-delete/jobs-delete.component';
import { JobsCreateComponent } from './components/jobs-create/jobs-create.component';


const routes: Routes = [
  { path: '', component: JobsComponent },
  { path: 'jobsCreate', component: JobsCreateComponent },
  { path: 'jobsEdit', component: JobsEditComponent },
  { path: 'jobsDelete', component: JobsDeleteComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
