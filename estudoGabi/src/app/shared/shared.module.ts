
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component';
import { TableDetailComponent } from './table/table-detail/table-detail.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { yesNoPipe } from './pipes/yesNo.pipe';
import { NgScrollbarModule } from 'ngx-scrollbar';


@NgModule({
  declarations: [
    CampoControlErroComponent,
    TableComponent,
    TableDetailComponent,
    yesNoPipe,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    NgScrollbarModule


  ],
  exports: [
    CampoControlErroComponent,
    TableDetailComponent,
    BreadcrumbComponent
  ]
})
export class SharedModule {
}
