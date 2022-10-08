import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent implements OnInit {
  constructor(private userService: UserService) {}
  users: string[];
  ngOnInit(): void {
    this.users = this.userService.activeUsers;
  }
  onSetToInactive(id: number) {
    this.userService.onSetToInactive(id);
    // this.userSetToInactive.emit(id);
  }
}
