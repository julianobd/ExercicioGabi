import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder} from '@angular/forms';
import { LoginService } from './../../../shared/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;


  constructor(private loginservice:LoginService, private fb:FormBuilder) {
    this.formulario = this.fb.group({
      email:['', [Validators.required]],
      password:['', [Validators.required]]
    })
   }

  ngOnInit(): void {
  }

  save(){
    this.loginservice.postLogin(this.formulario.value).subscribe((res:any)=> {
      sessionStorage.setItem('user', JSON.stringify(res));
    });
  }

}
