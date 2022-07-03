import { Component, OnInit } from '@angular/core';
import { UserModel } from '../model/user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  userList: UserModel[] = [];
  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.userList = this.userService.getUserList();
  }

  deleteUser(id: number) {
    this.userService.delete(id);
    this.userList = this.userService.getUserList();
  }
}
