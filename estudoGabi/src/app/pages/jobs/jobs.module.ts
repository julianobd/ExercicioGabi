import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';
import { SharedModule } from './../../shared/shared.module';
import { JobsCreateComponent } from './components/jobs-create/jobs-create.component';
import { JobsEditComponent } from './components/jobs-edit/jobs-edit.component';
import { JobsDeleteComponent } from './components/jobs-delete/jobs-delete.component';


@NgModule({
  declarations: [JobsComponent, JobsCreateComponent, JobsEditComponent, JobsDeleteComponent],
  imports: [
    CommonModule,
    JobsRoutingModule,
    SharedModule
  ]
})
export class JobsModule { }
