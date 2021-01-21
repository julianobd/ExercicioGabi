import { Component, OnInit, Directive } from '@angular/core';
import { Validators, FormGroup, FormBuilder} from '@angular/forms';
import { LoginService } from './../../../shared/services/login.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;


  constructor(private loginservice:LoginService, private fb:FormBuilder,private router:Router) {

   }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required]]
    })

  }

  save(){
    console.log(this.formulario)
    this.loginservice.postLogin(this.formulario.value).subscribe((res:any)=> {
      sessionStorage.setItem('user', JSON.stringify(res));
      this.router.navigate(['/server'])
    },
    (error:any)=> alert('erro'));
  }

  verificaEmailIvalido(){
    let campoEmail = this.formulario.get('email')
    if(campoEmail.errors){
      return this.formulario.get('email').errors['email'] && campoEmail.touched;
    }
  }

  verificaValidTouched(campo: string) {
    return (
      !this.formulario.get(campo).valid &&
      (this.formulario.get(campo).touched || this.formulario.get(campo).dirty)
    );
  }

  aplicaCssErro(campo: string) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }
}
