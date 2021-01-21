import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { ServerListService } from 'src/app/shared/services/server-list.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-available-items',
  templateUrl: './available-items.component.html',
  styleUrls: ['./available-items.component.scss']
})
export class AvailableItemsComponent implements OnInit {
  dataAvbItem:FormGroup;
  avbItem:any;
  dataServer:any;
  availableItems:any;
  serverIdnumber:any;
  avbItemID:any;

  constructor(
    private fb:FormBuilder,
    private serverListService: ServerListService,
    private router:Router,
    private route:ActivatedRoute
  ) {
    this.dataAvbItem = this.fb.group({
      "name": '',
        "health": '',
        "vest": '',
        "experience": '',
        "hungry": '',
        "money": '',
        "statusPoint": '',
        "isInitial": '',
        "quantityInitial":'',
        "isVirtual": '',
    })

   }

  ngOnInit(): void {
    this.serverListService. getdataServer().subscribe((res:any)=>
    {
      this.dataServer = res.availableItems;
      console.log(this.dataServer);
      this.avbItem = this.dataServer;
     }
    )
    this.serverIdnumber = this.route.snapshot.paramMap.get('id');
    console.log(this.serverIdnumber);


  }
  editAvb(i){
      this.avbItemID = this.avbItem[i].id;
      console.log(this.avbItemID);
      this.router.navigate(['editAvb', this.avbItemID], {relativeTo: this.route})
  }
  addAvb(){
      this.avbItem.push({
        name: this.dataAvbItem.value.name,
        health: this.dataAvbItem.value.health,
        vest: this.dataAvbItem.value.vest,
        experience: this.dataAvbItem.value.experience,
        hungry: this.dataAvbItem.value.hungry,
        money: this.dataAvbItem.value.money,
        statusPoint: this.dataAvbItem.value.statusPoint,
        isInitial: this.dataAvbItem.value.isInitial,
        quantityInitial:this.dataAvbItem.value.quantityInitial,
        isVirtual: this.dataAvbItem.value.isVirtual,

      })
  }
  saveAvb(){
    const id = "00000000-0000-0000-0000-000000000000";
    this.avbItem.forEach(element => {
      element.id = id;
    });
    this.serverListService.updateAvb(this.avbItem).pipe(take(1)).subscribe(res=>{
      console.log('Avb Item adicionado com sucesso', res)
    })
    this.dataAvbItem.reset({
      name: '',
        health: '',
        vest: '',
        experience: '',
        hungry: '',
        money: '',
        statusPoint: '',
        isInitial: '',
        quantityInitial:'',
        isVirtual: '',
    })
  }
  delete(i){
    this.avbItem.splice(i,1);
    const id = "00000000-0000-0000-0000-000000000000";
    this.avbItem.forEach((x) => {
      x.id = id;
    });
    this.serverListService.updateAvb(this.avbItem).pipe(take(1)).subscribe((res:any)=>{
      console.log('Avb Excluído',res)
    })

  }


}
