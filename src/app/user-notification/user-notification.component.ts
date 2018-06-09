import { Component, OnInit } from '@angular/core';
import {SignOut} from '../SignOut';

@Component({
  selector: 'app-user-notification',
  templateUrl: './user-notification.component.html',
  styleUrls: ['./user-notification.component.css']
})
export class UserNotificationComponent implements OnInit {

  constructor(public signOut: SignOut) { }

  ngOnInit() {
  }

}
