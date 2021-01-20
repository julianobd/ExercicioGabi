import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { ServerListService } from 'src/app/shared/services/server-list.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-parcel-edit',
  templateUrl: './parcel-edit.component.html',
  styleUrls: ['./parcel-edit.component.sass']
})
export class ParcelEditComponent implements OnInit {
  dataParcel:FormGroup;
  dataParcels: any[];
  parcelId:any;
  dataServer:any;

  constructor(
    private fb:FormBuilder,
    private serverListService: ServerListService,
    private router:Router,
    private route:ActivatedRoute,
  private location: Location

  ) {

  }

  ngOnInit(): void {

    this.parcelId = this.route.snapshot.paramMap.get('parcId');

    this.dataParcel = this.fb.group({
      parcelName:[null],
      parcelDescription:[null]
    })
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
      this.location.back();

  }


}
