import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUser } from '../model/login_user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsersService {

  private validUsername = 'test';
  private validPassword = 'test';
  private usersApiUrl = 'https://randomuser.me/api/';

  constructor(private httpClient: HttpClient) { }

  validateUser(loginUser: LoginUser): boolean {
    let valid: boolean = false;

    if (loginUser.username === this.validUsername && loginUser.password === this.validPassword) {
      valid = true;
    }

    return valid;
  }

  getUsers(results: number = 12): Observable<any> {
    return this.httpClient.get(`${this.usersApiUrl}?results=${results}`);
  }

}
