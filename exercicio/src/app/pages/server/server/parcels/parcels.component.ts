import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ServerListService } from 'src/app/shared/services/server-list.service';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'app-parcels',
  templateUrl: './parcels.component.html',
  styleUrls: ['./parcels.component.sass']
})
export class ParcelsComponent implements OnInit {
  dataParcel:FormGroup;
  dataParcels: any[];
  parcelId:any;
  dataServer:any;
  constructor(
    private fb:FormBuilder,
    private serverListService: ServerListService,
    private router:Router,
    private route:ActivatedRoute,


  ) { }

  ngOnInit(): void {
    this.dataParcel = this.fb.group({
      parcelName:[null],
      parcelDescription:[null]
    })
    this.parcelId = this.route.snapshot.paramMap.get('parcId');

    this.serverListService.getdataServer().pipe(take(1)).subscribe((res:any)=>{
      this.dataParcels = res.parcels
      this.dataServer = res;
      res.parcels.forEach(parcel =>{
        if(parcel.id === this.parcelId){
          this.dataParcel = this.fb.group(parcel);
        }
      })

    })
  }

  update(){
    const id = "00000000-0000-0000-0000-000000000000";
    Object.assign(this.dataParcels[this.dataParcels.findIndex(
      el =>
      el.id === this.dataParcel.value.id)], this.dataParcel.value);

      this.dataParcels.forEach(x => {
        x.id = id;
      });
      console.log(this.dataParcels);
      this.serverListService.updateServer(this.dataServer).pipe(take(1)).subscribe((res)=>
      {
        console.log('Parcel Atualizada')
      })
      this.router.navigate(['/server/serverEdit']);
  }


}
