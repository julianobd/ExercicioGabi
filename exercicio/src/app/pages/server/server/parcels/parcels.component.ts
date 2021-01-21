import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ServerListService } from 'src/app/shared/services/server-list.service';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-parcels',
  templateUrl: './parcels.component.html',
  styleUrls: ['./parcels.component.scss']
})
export class ParcelsComponent implements OnInit {
  parcels:FormGroup;
  dataParcels: any[];
  parcelId:any;
  dataServer:any;
  constructor(
    private fb:FormBuilder,
    private serverListService: ServerListService,
    private router:Router,
    private route:ActivatedRoute

  ) {
    this.parcels = this.fb.group({
      parcelName:'',
      parcelDescription:''

    })
  }

  ngOnInit(): void {

   //this.parcelId = this.route.snapshot.paramMap.get('parcId');

    this.serverListService.getdataServer().pipe(take(1)).subscribe((res:any)=>{
      this.dataParcels = res.parcels
      this.dataServer = res;
      res.parcels.forEach(parcel =>{
        if(parcel.id === this.parcelId){
          this.parcels = this.fb.group(parcel);
        }
      })

    })
  }


  editParcel(i){
    this.parcelId = this.dataParcels[i].id;
    console.log(this.parcelId);
    this.router.navigate(['editParcel', this.parcelId], {relativeTo: this.route})

  }
  addParcel(){
      this.dataParcels.push({
        parcelName: this.parcels.value.parcelName,
        parcelDescription: this.parcels.value.parcelDescription
      })
      console.log(this.dataParcels);

  }
  saveParcel():void{
    const id = "00000000-0000-0000-0000-000000000000";
    this.dataParcels.forEach((x) => {
      x.id = id;
    });

    this.serverListService.updateServer(this.dataServer).pipe(take(1)).subscribe((res:any)=>{
      console.log('Parcel adicionada', res.parcels)
    })
    this.parcels.reset({
      parcelName:'',
      parcelDescription:''
    })

  }
  delete(i){
    this.dataParcels.splice(i,1);
    const id = "00000000-0000-0000-0000-000000000000";
    this.dataParcels.forEach((x) => {
      x.id = id;
    });
    this.serverListService.updateServer(this.dataServer).pipe(take(1)).subscribe((res:any)=>{
      console.log('Parcel Excluída', res.parcels)
    })

  }


}
