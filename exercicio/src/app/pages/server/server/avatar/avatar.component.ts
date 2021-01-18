import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { AvatarService } from '../../../../shared/services/avatar.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
import { relative } from 'path';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.sass']
})
export class AvatarComponent implements OnInit {
  avatar:any;
  avatarId:any;
  dataAvatar:any;

  constructor(
    private avatarservice:AvatarService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.avatarservice.getAvatarlist().pipe(take(1)).subscribe(res=>{
      console.log(res);
      this.dataAvatar = res;
      this.avatar = this.dataAvatar;

    })

  }
  avatarEdit(i){
    this.avatarId = this.avatar[i].uuid;
    console.log(this.avatarId);
    sessionStorage.setItem('avatar', JSON.stringify(this.avatarId));
    this.router.navigate(['editAvatar', this.avatarId], {relativeTo:this.route} )

  }

}
