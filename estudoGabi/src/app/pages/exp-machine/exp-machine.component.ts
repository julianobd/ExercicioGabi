
import { Component, OnInit } from '@angular/core';
import { ExpmachineService } from '../../core/services/expmachine.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ExpMach } from './../../core/model/expmach';
import {  map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-exp-machine',
  templateUrl: './exp-machine.component.html',
  styleUrls: ['./exp-machine.component.scss']
})
export class ExpMachineComponent implements OnInit {
  /*expMach:any;
  dataexpMach:any;
  machineId:any;*/
  currentTitle = 'Máquina de Experiência'
  dataAction =[{
    iconClass:'./../../../assets/img/edit 1.png',
    eventName:'editar'
  }]
  dataColumn = [
    {
    columnName:'description',
    displayName:'Descrição'
  },
  {
    columnName:'expEachMinute',
    displayName:'XP por minuto'
  },
  {
    columnName:'hourStart',
    displayName:'Hora do Início'
  },
  {
    columnName:'hourEnds',
    displayName:'Hora do Término'
  },
  {
    columnName:'enabled',
    displayName:'Ativado'
  }
]
  dataId:string;
  dataItems:Observable<ExpMach[]>;
  ITEMS:ExpMach[];
  constructor(
    private expmachineService:ExpmachineService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void{
    this.dataItems = this.expmachineService.listExpMach().pipe(take(1),map((x:any)=>x))
    this.dataItems.subscribe((res:any)=>{
      this.ITEMS = res;
      console.log("Exp Machine: ", this.ITEMS)
    })

  }
  action(dataEvent){
      console.log('rota de edição')
      this.router.navigate(['expMachEdit'], { relativeTo: this.route })
  }
  create(dataCreate){
    console.log(dataCreate);
    this.router.navigate(['expMachCreate'], { relativeTo: this.route })
  }
 /*editMach(i){
    this.machineId = this.expMach[i].id;
    console.log(this.machineId)
    this.router.navigate(['expMachEdit', this.machineId], {relativeTo:this.route} )
  }*/

}
