import { Injectable } from '@angular/core';
import { LoginUser } from '../model/login_user';

@Injectable()
export class UsersService {

  private validUsername = 'test';
  private validPassword = 'test';

  constructor() { }

  validateUser(loginUser: LoginUser): boolean {
    let valid: boolean = false;

    if (loginUser.username === this.validUsername && loginUser.password === this.validPassword) {
      valid = true;
    }

    return valid;
  }

}
