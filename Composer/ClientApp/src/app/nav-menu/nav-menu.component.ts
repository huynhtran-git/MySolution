import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AuthenService } from '../services/authen.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  isExpanded = false;
  isLogin = false;

  constructor(private _auth: AuthenService, private _router: Router) {
  }

  ngOnInit() {
    this.isLogin = !!this._auth.getUser();
    if(!this.isLogin) {
      this._router.navigate(["login"]);
    }
    this._auth.currentUserObservable.subscribe(value => {
      this.isLogin = !!value;
      if(!this.isLogin) {
        this._router.navigate(["login"]);
      }
    })
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  logout() {
    this._auth.logout();
    this.isLogin = false;
    this._router.navigate(["login"]);
  }
}
