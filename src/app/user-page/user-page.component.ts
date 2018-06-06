import { Component, OnInit } from '@angular/core';
import {SignOut} from '../SignOut';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  constructor(public signOut: SignOut) { }

  ngOnInit() {
  }

}
