import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { UserService } from '../../shared/services/user.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
  users:any;
  datatUser:any;
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getUsers().pipe(take(1)).subscribe(res=>{
      console.log(res);
      this.datatUser = res;
      this.users = this.datatUser;
    })
  }



}
