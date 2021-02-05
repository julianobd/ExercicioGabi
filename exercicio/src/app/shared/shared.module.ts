import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { NgbdSortableHeader } from './directives/sortable.directive';





@NgModule({
  declarations: [
    CampoControlErroComponent,
    NgbdSortableHeader
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    CampoControlErroComponent
  ]

})
export class SharedModule { }
