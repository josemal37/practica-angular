import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pran-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title: string = 'Login';
  usernameText: string = 'Username';
  passwordText: string = 'Password';
  loginButtonText: string = 'Login';

  constructor() { }

  ngOnInit() {
  }

}
