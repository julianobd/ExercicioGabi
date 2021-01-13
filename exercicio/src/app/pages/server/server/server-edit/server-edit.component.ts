
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { take } from 'rxjs/operators';
import { ServerListService } from 'src/app/shared/services/server-list.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-server-edit',
  templateUrl: './server-edit.component.html',
  styleUrls: ['./server-edit.component.sass']
})
export class ServerEditComponent implements OnInit {
  dataServer: FormGroup;
  parcels:FormGroup;
  dataServers:any;
  dataUpdateServer:any[];
  dataParcels:any;
  parcelId:any;


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
    this.dataServer = this.fb.group({
      name:[null],
      shared:[null],
      hasDisease:[null],
      initialMoney:[null],
      initialStatsPoints:[null]
    })


    this.serverListService.getdataServer().pipe(take(1)).subscribe(
      (res:any)=>{
          this.dataServers = res;
          this.dataParcels = res.parcels;
          console.log(res);
        this.dataServer = this.fb.group({
          name: this.dataServers.name,
          shared: this.dataServers.shared,
          hasDisease: this.dataServers.hasDisease,
          initialMoney: this.dataServers.initialMoney,
          initialStatsPoints: this.dataServers.initialStatsPoints
        });

      }
    )
  }

  saveUpdate(){
    console.log(this.dataServer.value);
    this.serverListService.updateServer(this.dataServer.value).pipe(take(1)).subscribe((res)=>{
      console.log('servidor atualizado');

  })

  }
  editParcel(i){
    this.parcelId = this.dataParcels[i].id;
    console.log(this.parcelId);
    this.router.navigate(['parcels', this.parcelId], {relativeTo: this.route})

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

    this.serverListService.updateServer(this.dataServers).pipe(take(1)).subscribe((res:any)=>{
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
    this.serverListService.updateServer(this.dataServers).pipe(take(1)).subscribe((res:any)=>{
      console.log('Parcel Excluída', res.parcels)
    })

  }


}
