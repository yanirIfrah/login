import { USER_ITEMS } from './../user-data';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { forEach } from '@angular/router/src/utils/collection';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User[];
  userName: string;
  password: string;
  email: string;
  newUser: any = {};
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.getUser();
  }
  getUser() {
    this.user = this.userService.getUserFromData();
  }

  saveUser(user: User) {
    this.userService.addNewUSer(user);
    this.userName = '';
    this.password = '';
    this.email = '';
  }

  Register() {
    for (let user of USER_ITEMS) {
      if (this.userName === user.userName) {
        if (this.password === user.Password) {
          console.log('Welcome Back');
          this.router.navigate(['welcome']);
        }
        else {
          console.log('login dismmis');
          this.router.navigate(['login']);
        }
      }
    }
  }

}
