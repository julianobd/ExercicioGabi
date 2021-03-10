import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { take } from 'rxjs/operators';
import { UserService } from '../../../../core/services/user.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss']
})
export class UserDeleteComponent implements OnInit {
  user: FormGroup;
  dataUser: any;
  userId:any;
  constructor(
    private fb:FormBuilder,
    private userService: UserService,
    private router:Router,
    private route:ActivatedRoute,
    private modalService: NgbModal
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
  delete(){
    this.userService.deleteUser(this.userId).pipe(take(1)).subscribe(res=>{
      console.log(this.dataUser)
    })
  }
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
  back(): void {
    this.router.navigate(['app-container/users'])
  }
}
