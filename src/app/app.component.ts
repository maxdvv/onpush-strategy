import { Component, OnInit } from '@angular/core';

export interface UserList {
  name: string;
  age: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'onpush-strategy';

  userList = [
    {name: 'John', age: 25},
    {name: 'Nick', age: 35},
    {name: 'Jim', age: 32}
  ];

  userList2 = [
    {name: 'John2', age: 25},
    {name: 'Nick2', age: 35},
    {name: 'Jim2', age: 32}
  ];

  usersList3 = [
    {name: 'John3', age: 25},
    {name: 'Nick3', age: 35},
    {name: 'Jim3', age: 32}
  ];

  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
      console.log('Timeout 3 sec');
      this.userList = this.userList2;
      console.log(this.userList);
    }, 3000)

    setTimeout(() => {
      console.log('Timeout 3 sec');
      // Only this.userListDetectChanges[0] = { name: 'changed', age: 99 };
      // Doesn't work if use onPush because, object reference wasn't changed
      this.usersList3[0] = { name: 'changed', age: 99 };
      this.usersList3 = [ ...this.usersList3 ];
      console.log(this.usersList3);
    }, 3000)
  }
}
