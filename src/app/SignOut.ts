import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {LocalStorageService} from './local-storage.service';

@Injectable()
export class SignOut {
  constructor(private navigation: Router, private  localStorage: LocalStorageService) {
  }
  public SignOut() {
    this.localStorage.ClearLocalStorage();
    this.navigation.navigate(['/home']);
  }
}
