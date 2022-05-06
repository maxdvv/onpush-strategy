import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {UserList} from "../../app.component";
import {UsersServiceService} from "../../services/users-service.service";

@Component({
  selector: 'app-users-detect-changes',
  templateUrl: './users-detect-changes.component.html',
  styleUrls: ['./users-detect-changes.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersDetectChangesComponent implements OnInit {
  @Input() usersList3: UserList[] | undefined;

  constructor(public userService: UsersServiceService,
              private ref: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      console.log('Timeout 3 sec');
      this.userService.users$ = this.userService.users2$;
      this.ref.detectChanges();
    }, 3000)
  }

}
