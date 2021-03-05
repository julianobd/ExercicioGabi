import { Component, OnInit } from '@angular/core';
import { ServerService } from './../../core/services/server.service';
import { tabExp } from './../../core/model/tabExp';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {  map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-tab-exp',
  templateUrl: './tab-exp.component.html',
  styleUrls: ['./tab-exp.component.scss']
})
export class TabExpComponent implements OnInit {
  currentTitle = 'Máquina de Experiência'
  dataAction =[{
    iconClass:'./../../../assets/img/edit 1.png',
    eventName:'editar'
  }]
  dataColumn = [
    {
    columnName:'title',
    displayName:'Título'
  },
  {
    columnName:'exp',
    displayName:'Experiência'
  },
  {
    columnName:'level',
    displayName:'Nível'
  }
]
  dataId:string;
  dataItems:Observable<tabExp[]>;
  ITEMS:tabExp[];
  constructor(
    private serverService:ServerService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.dataItems = this.serverService.getdataServer().pipe(take(1),map((x:any)=>x.expTable))
    this.dataItems.subscribe((res:any)=>{
      this.ITEMS = res;
      console.log("ExpTable: ", this.ITEMS)
    })
  }

  action(dataEvent){
    console.log('rota de edição')
    this.router.navigate(['tabExpEdit'], { relativeTo: this.route })
}
  create(dataCreate){
    console.log(dataCreate);
    this.router.navigate(['tabExpCreate'], { relativeTo: this.route })
  }
}
