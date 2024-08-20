import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  allReadyHasAcc : boolean = true;
  showPassword : boolean = false;

  logInForm !: FormGroup;
  signUpForm !: FormGroup;

  constructor(
    private _authService : AuthService
  ) { }

  ngOnInit(): void {
    this.createlogInForm();
    this.createsignUpForm()
  }

  createlogInForm(){
      this.logInForm = new FormGroup({
        email : new FormControl(null, [Validators.required]),

        password : new FormControl(null, [Validators.required])
      })
  }

  onLogIn(){
      if (this.logInForm.valid) {
        this._authService.logInApp(this.logInForm.value.email, this.logInForm.value.password)
      }
  }

  createsignUpForm(){
    this.signUpForm = new FormGroup({
      name: new FormControl(null,[Validators.required]),
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      confirmPassword: new FormControl(null, [Validators.required])
    });
  }

  onSubmit(){

  }

}
