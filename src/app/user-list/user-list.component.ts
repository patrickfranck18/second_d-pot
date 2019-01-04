import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../models/uer.models';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

  users: User[];
  userSubscription: Subscription;
  test = "Bonjour";


  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userSubscription = this.userService.UsersSubject.subscribe(
      (users: User[]) => {
        this.users = users;
      }
    );
    this.userService.emitUsers();
  }
  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
