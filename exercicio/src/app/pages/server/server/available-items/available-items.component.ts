import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { ServerListService } from 'src/app/shared/services/server-list.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-available-items',
  templateUrl: './available-items.component.html',
  styleUrls: ['./available-items.component.sass']
})
export class AvailableItemsComponent implements OnInit {
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
  ) { }

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

}
