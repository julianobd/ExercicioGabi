
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { take } from 'rxjs/operators';
import { UserService } from '../../../../core/services/user.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  user: FormGroup;
  userPassword:FormGroup;
  dataUser: any;
  userId:any;
  closeResult: string;
  dataTitle = "Usuários";
  dataAction = "Editar";
  active = 1;
  error_messages = {
    'password': [
      { type: 'required', message: 'Senha obrigatória.'},
      { type: 'minlength', message: 'Senha deve conter mais de 6 caracteres.' },
      { type: 'maxlength', message: 'Senha deve conter menos de 30 caracteres.' }
    ],
    'confirmPassword': [
      { type: 'required', message: 'Confirmação de senha obrigatória.' },
      { type: 'minlength', message: 'Senha deve conter mais de 6 caracteres.' },
      { type: 'maxlength', message: 'Senha deve conter menos de 30 caracteres.' }
    ]

  }

  constructor(
    public formBuilder:FormBuilder,
    private userService: UserService,
    private router:Router,
    private route:ActivatedRoute,
    private modalService: NgbModal
  ) {
    this.userPassword = this.formBuilder.group(
      {
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]),
      confirmPassword: new FormControl('',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]),
    }, {
      validators: this.password.bind(this)
    });
  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('userId');
    this.user = this.formBuilder.group({
      name:[null],
      email:[null],
      password:[null],
      permission:[null],

  })

    this.userService.getUsers().pipe(take(1)).subscribe((res:any)=>{
      console.log(res)
      this.dataUser = res;
      this.dataUser.forEach(element => {
        if(element.id === this.userId){
          this.user = this.formBuilder.group(element);
        }
      });
    })
  }
  password(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmPassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

  update(){

    /*this.userService.editUser(this.user.value, this.userId).pipe(take(1)).subscribe(res=>{
      console.log('Atualizado ')
      this.router.navigate(['app-container/users'])
    });*/

  }
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
  back(): void {
    this.router.navigate(['app-container/users'])
  }
}
