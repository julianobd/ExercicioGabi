import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerRoutingModule } from './server-routing.module';
import { ServerComponent } from './server.component';
import { AuthGuard } from '../../core/guards/auth-guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ServerComponent],
  imports: [
    CommonModule,
    ServerRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[
    AuthGuard
  ]
})
export class ServerModule { }
