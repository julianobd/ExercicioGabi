import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { take } from 'rxjs/operators';
import { UserService } from './../../../shared/services/user.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.sass']
})
export class UserEditComponent implements OnInit {
  user: FormGroup;
  dataUser: any;
  userId:any;
  constructor(
    private fb:FormBuilder,
    private userService: UserService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('userId');

    this.user = this.fb.group({
      name:[null],
      email:[null],
      password:[null],
      permission:[null]
  })
    this.userService.getUsers().pipe(take(1)).subscribe((res:any)=>{
      console.log(res)
      this.dataUser = res;
      this.dataUser.forEach(element => {
        if(element.id === this.userId){
          this.user = this.fb.group(element);
        }
      });
    })
  }

  update(){
    this.userService.editUser(this.user.value).pipe(take(1)).subscribe(res=>{
      console.log('Atualizado')
    })
  }
}
