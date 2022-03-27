import { Component } from '@angular/core';
import { UsersService } from './Services/users.service';
import { User } from './user/Model/user.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  //data: User[] = this.usersService.getUsers();
  constructor(private usersService: UsersService) {}
  get users() {
    return this.usersService.users;
  }
  async ngOnInit() {
    await this.usersService.setUsers();
  }
}
