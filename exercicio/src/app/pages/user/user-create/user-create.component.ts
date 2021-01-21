import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { take } from 'rxjs/operators';
import { UserService } from '../../../shared/services/user.service'

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  user:FormGroup;

  constructor(
    private fb:FormBuilder,
    private userService: UserService
  ) {
    this.user = this.fb.group({
        name:'',
        email:'',
        password:'',
        permission:'',
        serverId:''
    })
  }

  ngOnInit(): void {

  }
  save(){
      this.userService.createUser(this.user.value).pipe(take(1)).subscribe(res=>{
        console.log(res)
      })
  }

}
