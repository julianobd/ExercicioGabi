import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeListRoutingModule } from './home-list-routing.module';
import { HomeListComponent } from './home-list.component';

import { AuthGuard } from '../../guards/auth-guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeListComponent],
  imports: [
    CommonModule,
    HomeListRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[
    AuthGuard
  ]
})
export class HomeListModule { }
