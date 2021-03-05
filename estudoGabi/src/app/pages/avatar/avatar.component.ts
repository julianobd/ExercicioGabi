
import { Component, OnInit } from '@angular/core';import { FormGroup, FormBuilder } from '@angular/forms';
import { AvatarService } from '../../core/services/avatar.service';
import { Avatar } from './../../core/model/avatar';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {  map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  /*dataReason:FormGroup
  avatar:any;
  avatarId:any;
  dataAvatar:any;*/
  currentTitle = 'Avatar'
  dataAction =[{
    iconClass:'./../../../assets/img/edit 1.png',
    eventName:'editar'
  },
  {
   iconClass:'./../../../assets/img/delete 3.png',
   eventName:'deletar'
  }]

  dataColumn = [
    {
    columnName:'name',
    displayName:'Nome'
  },
  {
    columnName:'title',
    displayName:'Título'
  },
  {
    columnName:'armor',
    displayName:'Armadura'
  },
  {
    columnName:'health',
    displayName:'Fome'
  },
  {
    columnName:'isLeader',
    displayName:'Líder'
  },
  {
    columnName:'money',
    displayName:'Dinheiro'
  },
  {
    columnName:'statusPoint',
    displayName:'Pts Status'
  },
  {
    columnName:'isBanned',
    displayName:'Banido'
  },
  {
    columnName:'bannedReason',
    displayName:'Motivo do Ban'
  },
  {
    columnName:'isDead',
    displayName:'Morto'
  },
  {
    columnName:'isAdmin',
    displayName:'Admin'
  },
  {
    columnName:'strength',
    displayName:'Str'
  },
  {
    columnName:'agility',
    displayName:'Agi'
  },
  {
    columnName:'accuracy',
    displayName:'Acc'
  }

]
    dataId:string;
    dataItems:Observable<Avatar[]>;
    ITEMS:Avatar[];

  constructor(
    private avatarservice:AvatarService,
    private router:Router,
    private route:ActivatedRoute,
    private fb:FormBuilder
  ) {
    /*this.dataReason = this.fb.group({
      reason:''
  })*/
  }

  ngOnInit(): void {
    this.dataItems = this.avatarservice.getAvatarlist().pipe(take(1),map((x:any)=>x))

    this.dataItems.subscribe((res:any)=>{
      this.ITEMS = res;
      console.log("Estes são os Avatares:", this.ITEMS);
    })

  }
  action(dataEvent){
    if(dataEvent.action=='editar'){
      console.log('rota de edição')
      this.router.navigate(['avatarEdit'], { relativeTo: this.route })
    }else{
      console.log('rota para deletar')
      this.router.navigate(['avatarDelete'], { relativeTo: this.route })
    }
  }
  create(dataCreate){
    console.log(dataCreate);
    this.router.navigate(['avatarCreate'], { relativeTo: this.route })
  }
   /*avatarEdit(i){
    this.avatarId = this.avatar[i].uuid;
    console.log(this.avatarId);
    this.router.navigate(['editAvatar', this.avatarId], {relativeTo:this.route} )

  }
 getUuid(i){
    this.avatarId = this.avatar[i].uuid;
    console.log(this.avatarId);
  }
  banir(){
    sessionStorage.setItem('banned', JSON.stringify(this.dataReason.value));
   this.avatarservice.banir(this.dataReason.value).pipe(take(1)).subscribe(res=>{
    console.log('Banido')
    })

  }
  desbanir(i){
    this.avatarId = this.avatar[i].uuid;
    console.log(this.avatarId);
  this.dataReason.setValue({
      reason:''
    });

    this.avatarservice.desbanir(this.dataReason.value).pipe(take(1)).subscribe(res => {
      console.log('desbanido')
    })
  }*/

}
