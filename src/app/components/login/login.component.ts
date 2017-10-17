import { Router } from '@angular/router';
import { LoginUser } from '../../shared/model/login_user';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../shared/services/users.service';
import { MatDialog } from '@angular/material';
import { CustomDialogComponent } from '../custom-dialog/custom-dialog.component';

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
  loginErrorTitle: string = 'Login error';
  loginErrorText: string = 'Incorrect username or password.';
  loginErrorButtonText: string = 'Close';

  loginUser: LoginUser = {
    username: '',
    password: ''
  };

  constructor(private router: Router, private usersService: UsersService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  onSubmit(): void {
    if (this.usersService.validateUser(this.loginUser)) {
      this.router.navigate(['dashboard']);
    } else {
      this.loginError();
    }
  }

  loginError() {
    this.dialog.open(
      CustomDialogComponent,
      {
        data: {
          buttonText: this.loginErrorButtonText,
          description: this.loginErrorText,
          title: this.loginErrorTitle
        }
      }
    );
  }

}
