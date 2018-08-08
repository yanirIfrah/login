import { USER_ITEMS } from './user-data';
import { Injectable } from '@angular/core';
import { User } from './user';
@Injectable()
export class UserService {
  private UItems = USER_ITEMS; 
  constructor() { }

  getUserFromData():User[]{
    console.log(this.UItems);
    return this.UItems;
  }

  addNewUSer(user:User){
    this.UItems.push(user);
    console.log(this.UItems);
  }
}
