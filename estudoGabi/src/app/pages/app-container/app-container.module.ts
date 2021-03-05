import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppContainerRoutingModule } from './app-container-routing.module';
import { AppContainerComponent } from './app-container.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthGuard } from '../../core/guards/auth-guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppContainerComponent, SideNavComponent,
    NavbarComponent],
  imports: [
    CommonModule,
    AppContainerRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[
    AuthGuard
  ]
})
export class AppContainerModule { }
