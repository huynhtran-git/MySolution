import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LoginRequest } from '../models/loginRequest';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {
  loginUrl: string;
  currentUser = new Subject<string>();
  currentUserObservable = this.currentUser.asObservable();

  constructor(private _http: HttpClient,
              @Inject("BASE_URL") baseUrl: string) {
    this.loginUrl = baseUrl + "authen/login";
  }

  login(loginRequest: LoginRequest) {
    return this._http.post<User>(this.loginUrl, loginRequest);
  }

  logout() {
    localStorage.removeItem("user");
  }

  getUser() {
    return localStorage.getItem("user");
  }

  loginStatus() {
    this.currentUser.next(localStorage.getItem("user"));
  }
}
