import { Injectable } from '@angular/core';
import { User, Status } from '../user/Model/user.model';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: User[] | undefined;

  constructor() {}

  getUsers(): Promise<User[]> {
    return new Promise<User[]>((resolve, reject) => {
      setTimeout(() => {
        return resolve([
          {
            firstName: 'tamuna',
            lastName: 'odisharia',
            about: 'ragaca',
            birthDate: new Date(2000, 12, 11),
            status: Status.active,
          },
          {
            firstName: 'tamuna1',
            lastName: 'odisharia1',
            about: 'ragaca1',
            birthDate: new Date(1998, 12, 11),
            status: Status.inactive,
          },
          {
            firstName: 'tamuna2',
            lastName: 'odisharia2',
            about: 'ragaca2',
            birthDate: new Date(1999, 12, 11),
            status: Status.deleted,
          },
        ]);
      }, 0);
    });
  }

  async setUsers() {
    const data = await this.getUsers();
    this.users = data;
  }
}
