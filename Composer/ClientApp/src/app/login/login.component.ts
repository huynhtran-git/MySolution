import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenService } from '../services/authen.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  get f(){
    return this.loginForm.controls;
  }

  constructor(private _formBuilder: FormBuilder,
              private _authen: AuthenService,
              private _router: Router,
              private _snackBar: MatSnackBar
    ) { }

  ngOnInit() {
    const isLogin = !!this._authen.getUser();
    if(isLogin) {
      this._router.navigate(["home"]);
    }

    this.loginForm = this._formBuilder.group({
      usernameCtl: [null, Validators.required],
      passwordCtl: [null, Validators.required]
    })
  }

  onSubmit() {
    const loginRequest = {
      username: this.f.usernameCtl.value,
      password: this.f.passwordCtl.value
    }
    this._authen.login(loginRequest).subscribe(
      user => {
        if(user) {
          localStorage.setItem("user", JSON.stringify(user));
          this._authen.loginStatus();
          this._router.navigate(["/"]);
        } else {
          this.loginForm.reset();
          this._snackBar.open("Incorrect username or password", "Close", {
            duration: 2000,
          });
        }
      },
      (erro) => {
        this.loginForm.reset();
        this._snackBar.open("Erro, please try again", "Close", {
          duration: 2000,
        });
      }
    )
  }

}
