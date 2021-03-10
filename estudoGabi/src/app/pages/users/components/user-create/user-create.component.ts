import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';
import { UserService } from '../../../../core/services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss'],

})
export class UserCreateComponent implements OnInit {
  user:FormGroup;
  closeResult: string;
  dataTitle = "Usuários"
  dataAction = "Adicionar";
  alertMessage: string;
  activeMessage:boolean = false;
  typeAlert:any;

  constructor(
    private fb:FormBuilder,
    private userService: UserService,
    private modalService: NgbModal,
    private route:ActivatedRoute,
    private router:Router,

  ) {
    this.user = this.fb.group({
      name:['',[Validators.required]],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required]],
      permission:['',[Validators.required]],

  })
}

  ngOnInit(): void {
  }
  save(){



    this.userService.createUser(this.user.value).pipe(take(1)).subscribe(res=>{
      console.log(res);
      this.typeAlert = 'success'
      this.alertMessage = "Usuário adicionado com sucesso";
      this.activeMessage = true;
      this.user.reset();
      this.router.navigate(['app-container/users'])
    },
    error =>{
    console.log('oops', error);
    this.typeAlert = 'danger'
    this.alertMessage = "Não foi possível adicionar o usuário"
    this.activeMessage = true;}
    )

}
openVerticallyCentered(content) {
  this.modalService.open(content, { centered: true });
}
back(): void {
  this.router.navigate(['app-container/users'])
}




}
