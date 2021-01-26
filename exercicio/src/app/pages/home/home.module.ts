
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarHomeComponent } from './navbar-home/navbar-home.component';
import { AuthGuard } from '../../guards/auth-guard';

@NgModule({
  declarations: [HomeComponent, NavbarHomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  providers:[
    AuthGuard
  ]
})
export class HomeModule { }
