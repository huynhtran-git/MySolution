import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { AuthenService } from '../services/authen.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  userInfo: User;

  constructor(private _auth: AuthenService, private _router: Router) {
  }

  ngOnInit() {
    this.userInfo = JSON.parse(this._auth.getUser());
  }
}
