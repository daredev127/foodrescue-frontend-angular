import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../dtos/User';
import { NewUser } from '../../dtos/NewUser';

@Component({
  templateUrl: 'donations.component.html',
})
export class DonationsComponent implements OnInit {
  constructor(private usersService: UsersService) {}

  users?: User[];
  admin = new NewUser();

  ngOnInit() {
    this.getAdmins();
  }

  getAdmins() {
    this.usersService.getAdmins().subscribe((res) => {
      if (res.status.toLowerCase() == 'ok') {
        this.users = res.data;
      }
    });
  }

  addAdmin() {
    this.usersService.addAdmin(this.admin).subscribe((res) => {
      if (res.status.toLowerCase() == 'ok') {
        this.admin = new NewUser();
        this.getAdmins();
      }
    });
  }

  toggleStatus(user: User) {
    console.log(user);
    if (user.status == 'Active') {
      this.usersService.blockAdmin(user).subscribe((res) => {
        if (res.status.toLowerCase() == 'ok') {
          this.getAdmins();
        }
      });
    } else {
      this.usersService.unblockAdmin(user).subscribe((res) => {
        if (res.status.toLowerCase() == 'ok') {
          this.getAdmins();
        }
      });
    }
  }
}
