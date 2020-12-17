import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private fb:FormBuilder) {

   }

  ngOnInit(): void {
  }

}
