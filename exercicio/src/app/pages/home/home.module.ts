import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarHomeComponent } from './navbar-home/navbar-home.component';
import { AuthGuard } from '../../guards/auth-guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, NavbarHomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[
    AuthGuard
  ]
})
export class HomeModule { }
