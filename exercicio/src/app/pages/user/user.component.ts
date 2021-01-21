import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users:any;
  datatUser:any;
  userId: any;
  constructor(
    private userService: UserService,
    private router:Router,
    private route:ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.userService.getUsers().pipe(take(1)).subscribe(res=>{
      console.log(res);
      this.datatUser = res;
      this.users = this.datatUser;
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



}
