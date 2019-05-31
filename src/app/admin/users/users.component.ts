import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[];
  hasPersmission = true; 
  constructor() { }

  ngOnInit() {
    if (this.hasPersmission) {
      this.getUsers()
        .then(users => this.users = users)
        .catch(e => console.log(e.message));

    } else {
      this.users = [];
    }
  }

  async getUsers() {
    return [
      { name: 'john', email: 'john@this.com' },
      { name: 'colleen', email: 'colleen@this.com' }
    ];
  }
}
