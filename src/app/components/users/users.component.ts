import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {UserList} from "../../app.component";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit {

  @Input() users: UserList[] | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
