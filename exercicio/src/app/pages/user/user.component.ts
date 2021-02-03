import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { User } from './../../core/navbar/models/users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user:User[];
  users:User[];
  USERS: User[];
  page = 1;
  pageSize = 4;
  collectionSize:number;
  userId: any;
  constructor(
    private userService: UserService,
    private router:Router,
    private route:ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.userService.getUsers().pipe(take(1)).subscribe((res:any)=>{
      console.log(res);
      this.users = res;
      this.USERS = res;
      this.refreshServers();

    })
  }
  userDelete(i){
    this.userId = this.users[i].id;
    sessionStorage.setItem('userid', JSON.stringify(this.userId));
    this.router.navigate(['userDelete', this.userId], {relativeTo: this.route})
  }
  userEdit(i){
    this.userId = this.users[i].id;
    sessionStorage.setItem('userid', JSON.stringify(this.userId));
    this.router.navigate(['userEdit', this.userId], {relativeTo: this.route})
  }
  refreshServers(){
    this.collectionSize = this.USERS.length;
    this.users = this.USERS
    .map((user, i) => ({id: i + 1, ...user}))
    .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}
