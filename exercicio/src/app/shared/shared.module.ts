import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { HomeContainerComponent } from './home-container/home-container.component';




@NgModule({
  declarations: [
    CampoControlErroComponent,
    HomeContainerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    CampoControlErroComponent,
    HomeContainerComponent
  ]

})
export class SharedModule { }
