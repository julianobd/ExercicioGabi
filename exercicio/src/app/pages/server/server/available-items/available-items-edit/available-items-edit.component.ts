import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { ServerListService } from '../../../../../shared/services/server-list.service'
import { take } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-available-items-edit',
  templateUrl: './available-items-edit.component.html',
  styleUrls: ['./available-items-edit.component.sass']
})
export class AvailableItemsEditComponent implements OnInit {
  dataAvbItem:FormGroup;
  tabAvb:any[];
  avbItemId:any;
  dataServer:any;

  constructor(
    private fb: FormBuilder,
    private serverListService:ServerListService,
    private router:Router,
    private route:ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.avbItemId = this.route.snapshot.paramMap.get('avbId');
      this.dataAvbItem = this.fb.group({
        "name": [null],
        "health": [null],
        "vest": [null],
        "experience": [null],
        "hungry": [null],
        "money": [null],
        "statusPoint": [null],
        "isInitial": [null],
        "quantityInitial":[null],
        "isVirtual": [null],
      })

      this.serverListService.getdataServer().pipe(take(1)).subscribe((res:any)=>{
        this.tabAvb = res.availableItems;
        this.dataServer = res
        res.availableItems.forEach(avb => {
          if(avb.id === this.avbItemId){
            this.dataAvbItem = this.fb.group(avb);
            console.log(this.dataAvbItem.value);
          }
      })


  })
}
update(){
  const id = "00000000-0000-0000-0000-000000000000";
  Object.assign(this.tabAvb[this.tabAvb.findIndex(el => el.id === this.dataAvbItem.value.id)], this.dataAvbItem.value);

  this.tabAvb.forEach(x=>{
      x.id = id;
  });
  console.log(this.tabAvb);

  this.serverListService.updateAvb(this.dataServer).pipe(take(1)).subscribe(res =>{
      console.log('Available Item Add com sucesso')
  })
      this.location.back();


}

}
