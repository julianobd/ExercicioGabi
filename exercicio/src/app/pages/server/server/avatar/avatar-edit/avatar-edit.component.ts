import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AvatarService } from '../../../../../shared/services/avatar.service'

@Component({
  selector: 'app-avatar-edit',
  templateUrl: './avatar-edit.component.html',
  styleUrls: ['./avatar-edit.component.scss']
})
export class AvatarEditComponent implements OnInit {
  avatar:FormGroup;
  avatarId:any;
  dataAvatar:any;

  constructor(
    private fb:FormBuilder,
    private router:Router,
    private route:ActivatedRoute,
    private avatarservice:AvatarService
  ) {

   }

  ngOnInit(): void {
   this.avatarId = this.route.snapshot.paramMap.get('avatarId');
   console.log(this.avatarId);
   this.avatar = this.fb.group({
    title:'',
    health:'',
    armor:'',
    experience:'',
    money:'',
    statsPoints:'',
    strength:'',
    agility:'',
    accuracy:''
   })
  this.avatarservice.getAvatarlist().pipe(take(1)).subscribe((res:any)=>{
    this.dataAvatar = res;
    this.dataAvatar.forEach(element =>{
      if(element.uuid === this.avatarId){
        this.avatar = this.fb.group(element);
      }
    })
  })

}

update(){
  this.avatarservice.updateAvatar(this.avatar.value).pipe(take(1)).subscribe(res=>{
    console.log('Atualizado')
  })
}


}
