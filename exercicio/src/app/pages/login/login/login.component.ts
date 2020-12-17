import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder} from '@angular/forms';
import { LoginService } from './../../../shared/services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;


  constructor(private loginservice:LoginService, private fb:FormBuilder,private router:Router) {
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
      this.router.navigate(['/server'])
    });
  }

}
