import { LoginUser } from '../../shared/model/login_user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pran-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginButtonText: string = 'Login';
  passwordText: string = 'Password';
  title: string = 'Login';
  usernameText: string = 'Username';

  loginUser: LoginUser = {
    username: '',
    password: ''
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit(): void {
    console.log(this.loginUser);
  }

}
