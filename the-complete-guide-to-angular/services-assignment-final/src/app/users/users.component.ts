import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../model/user.model';

export enum Mode {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  ALL = 'ALL',
  DEFAULT = ALL
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input() mode: Mode = Mode.DEFAULT;

  get activeUsers(): User[] {
    return this.usersService.activeUsers;
  }

  get inactiveUsers(): User[] {
    return this.usersService.inactiveUsers;
  }

  get users(): User[] {
    switch(this.mode) {
      case Mode.ACTIVE:
        return this.activeUsers;

      case Mode.INACTIVE:
        return this.inactiveUsers;

      case Mode.DEFAULT:
      default:
        return this.usersService.users;
    }
  }

  get modeLabel(): string {
    switch(this.mode) {
      case Mode.ACTIVE:
        return 'Active';

      case Mode.INACTIVE:
        return 'Inactive';

      case Mode.DEFAULT:
      default:
        return '(In)active';
    }
  }

  get toggleLabel(): string {
    switch(this.mode) {
      case  Mode.ACTIVE:
        return 'Inactive';

      case Mode.INACTIVE:
        return 'Active';

      default:
        return '(In)active';
    }
  }

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

  onToggleActive(userId: number): void {
    this.usersService.toggleActive(userId);
  }

}
