import { Component, OnInit } from '@angular/core';
import { UserService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService],
})
export class AppComponent implements OnInit {
  activeUsers: string[] = [];

  constructor(private userService: UserService) {}
  ngOnInit() {
    this.activeUsers = this.userService.activeUsers;
  }
}
