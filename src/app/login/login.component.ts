import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
 
const template = `
 
<form (ngSubmit)='loginUser()' [formGroup]='loginForm' novalidate class="form">
    <input formControlName='email'
           type="text"
           class="form-control"
           placeholder="Enter Email" />
    <input formControlName='password'
           type="password"
           class="form-control"
           placeholder="Enter Password" />
    <button [disabled]='loginForm.invalid' class="btn btn-default">Login</button>
</form>
`
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  template: template,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    })
   }

  ngOnInit(): void {
  }

  loginUser() {
    console.log(this.loginForm.status);
    console.log(this.loginForm.value);
  }

}
