import { Component, OnInit } from '@angular/core';
import {  map, take } from 'rxjs/operators';
import { DeseaseService } from '../../core/services/desease.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Desease } from './../../core/model/desease';

@Component({
  selector: 'app-desease',
  templateUrl: './desease.component.html',
  styleUrls: ['./desease.component.scss']
})
export class DeseaseComponent implements OnInit {
  currentTitle = 'Debuffs';
  dataAction =[{
    iconClass:'./../../../assets/img/edit 1.png',
    eventName:'editar'
  },
  {
   iconClass:'./../../../assets/img/delete 3.png',
   eventName:'deletar'
  }]
  dataColumn = [{
    columnName:'name',
    displayName:'Nome'
  },
  {
    columnName:'damageEachTenMinutes',
    displayName:'Dano por minuto'
  },
  {
    columnName:'durationInMinutes',
    displayName:'Duração'
  },
  {
    columnName:'contagious',
    displayName:'Contagioso'
  }
]
  /*desease:any;
  dataDesease:any;
  deseaseId:any;*/
  dataId:string;
  dataItems:Observable<Desease[]>;
  ITEMS:Desease[];
  constructor(
    private deseaseService:DeseaseService,
    private router:Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.dataItems = this.deseaseService.getDesease().pipe(take(1), map((x:any)=>x.availableDisease))
    this.dataItems.subscribe((res:any)=>{
      this.ITEMS = res.availableDisease;
      console.log("Estes são os Debuffs: ", this.ITEMS)
    })
    /*this.deseaseService.getDesease().pipe(take(1)).subscribe((res:any)=>{
      this.dataDesease = res.availableDisease;
      this.desease = this.dataDesease;
    })*/
}
action(dataEvent){
  if(dataEvent.action=='editar'){
    console.log('rota de edição')
    this.router.navigate(['deseaseEdit'], { relativeTo: this.route })
  }else{
    console.log('rota para deletar')
    this.router.navigate(['deseaseDelete'], { relativeTo: this.route })
  }
}
create(dataCreate){
  console.log(dataCreate);
  this.router.navigate(['deseaseCreate'], { relativeTo: this.route })
}
/*deseaseDelete(i){
  this.deseaseId = this.desease[i].id;
  this.router.navigate(['deseaseDelete', this.deseaseId], {relativeTo: this.route})
}
deseaseEdit(i){
  this.deseaseId = this.desease[i].id;
  this.router.navigate(['deseaseEdit', this.deseaseId], {relativeTo: this.route})
}*/

}
