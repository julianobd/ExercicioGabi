import { Component, OnInit} from '@angular/core';
import {  map, take } from 'rxjs/operators';
import { ServerService } from './../../core/services/server.service';
import { Items } from './../../core/model/items';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  currentTitle = 'Items'
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
    columnName:'health',
    displayName:'Vida'
  },
  {
    columnName:'vest',
    displayName:'Colete'
  },
  {
    columnName:'experience',
    displayName:'Experiência'
  },
  {
    columnName:'hungry',
    displayName:'Fome'
  },
  {
    columnName:'money',
    displayName:'Dinheiro'
  },
  {
    columnName:'statusPoint',
    displayName:'Status Point'
  },
  {
    columnName:'isInitial',
    displayName:'Inicial'
  },
  {
    columnName:'quantityInitial',
    displayName:'Quantidade Inicial'
  }

]
  dataId:string;
  dataItems:Observable<Items[]>;
  ITEMS:Items[];


  constructor(
    private serverService:ServerService,
    private router:Router,
    private route: ActivatedRoute) {


  }

  ngOnInit(): void {
    this.dataItems = this.serverService.getdataServer()
    .pipe(take(1),map((x:any)=>x.availableItems))

    this.dataItems.subscribe((res:any)=>{
      this.ITEMS = res;
      console.log("ESTES SÃO OS ITEMS:",this.ITEMS);



    })
  }

  action(dataEvent){
    if(dataEvent.action=='editar'){
      console.log('rota de edição')
      this.router.navigate(['itemsEdit'], { relativeTo: this.route })
    }else{
      console.log('rota para deletar')
      this.router.navigate(['itemsDelete'], { relativeTo: this.route })
    }
  }
  create(dataCreate){
    console.log(dataCreate);
    this.router.navigate(['itemsCreate'], { relativeTo: this.route })

  }


}
