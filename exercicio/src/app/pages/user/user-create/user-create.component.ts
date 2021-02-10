import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { take } from 'rxjs/operators';
import { UserService } from '../../../shared/services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  user:FormGroup;
  closeResult: string;

  constructor(
    private fb:FormBuilder,
    private userService: UserService,
    private modalService: NgbModal,
    private route:ActivatedRoute,
    private router:Router,
  ) {
    this.user = this.fb.group({
        name:'',
        email:'',
        password:'',
        permission:'',

    })
  }

  ngOnInit(): void {

  }
  save(){
      this.userService.createUser(this.user.value).pipe(take(1)).subscribe(res=>{
        console.log(res)
      })
  }
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
  back(): void {
    this.router.navigate(['home/user'])
  }

}
