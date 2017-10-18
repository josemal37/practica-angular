import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/model/user';
import { UsersService } from '../../shared/services/users.service';

@Component({
  selector: 'pran-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users: User[];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe((data) => {
      this.users = data.results;
      console.log(this.users);
    });
  }

}
