import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

// activeUsers = ['Max', 'Anna'];
// inactiveUsers = ['Chris', 'Manu'];

@Injectable()
export class UsersService {
  users: User[] = [
    { id: 1, name: 'Max', active: true },
    { id: 2, name: 'Anna', active: true },
    { id: 3, name: 'Chris', active: false },
    { id: 4, name: 'Manu', active: false }
  ];

  get activeUsers() {
    return this.users.filter((user: User) => user.active);
  }

  get inactiveUsers() {
    return this.users.filter((user: User) => !user.active);
  }

  filterById(id: number): User[] {
    return this.users.filter((user: User) => user.id === id);
  }

  toggleActive(userId: number) {
    let filteredUsers: User[] = this.filterById(userId);
    filteredUsers.forEach((user: User) => user.active = !user.active);
  }
}
