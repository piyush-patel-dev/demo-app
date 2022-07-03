import { Injectable } from '@angular/core';
import { UserModel } from './model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  userList: UserModel[] = [
    {
      id: 1,
      firstName: 'demo1',
      lastName: 'test1',
    },
    {
      id: 2,
      firstName: 'demo2',
      lastName: 'test2',
    },
    {
      id: 3,
      firstName: 'demo3',
      lastName: 'test3',
    },
    {
      id: 4,
      firstName: 'demo4',
      lastName: 'test4',
    },
    {
      id: 5,
      firstName: 'demo5',
      lastName: 'test5',
    },
    {
      id: 6,
      firstName: 'demo6',
      lastName: 'test6',
    },
  ];
  constructor() {}

  getUserList(): UserModel[] {
    return this.userList;
  }

  delete(id: number) {
    const index = this.userList.findIndex((x) => x.id === id);
    if (index !== -1) {
      this.userList.splice(index, 1);
    }
  }
}
