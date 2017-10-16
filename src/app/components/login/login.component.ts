import { Router } from '@angular/router';
import { LoginUser } from '../../shared/model/login_user';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../shared/services/users.service';

@Component({
  selector: 'pran-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginButtonText: string = 'Login';
  private passwordText: string = 'Password';
  private title: string = 'Login';
  private usernameText: string = 'Username';

  private loginUser: LoginUser = {
    username: '',
    password: ''
  };

  constructor(private router: Router, private usersService: UsersService) { }

  ngOnInit() {
  }

  private onSubmit(): void {
    if (this.usersService.validateUser(this.loginUser)) {
      this.router.navigate(['dashboard']);
    } else {
      this.loginError();
    }
  }

  private loginError() {
    alert("Usuario no valido!");
  }

}
