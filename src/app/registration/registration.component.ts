import {Component, OnInit} from '@angular/core';
import {User} from '../UserField/User';
import {UserService} from '../user.service';
import {LocalStorageService} from '../local-storage.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public FirstName: string;
  public SecondName: string;
  public Password: string;
  public Email: string;
  public ConfirmPassword: string;
  public Updates;
  private NewUser;

  constructor(private userService: UserService, private  localStorageId: LocalStorageService, private router: Router) {
  }

  ngOnInit() {
  }

  registerUser(): void {
    if (this.Password === this.ConfirmPassword) {
      const user: User = new User(this.FirstName + ' ' + this.SecondName, this.Password, this.Email);
      this.userService.addItem(user).subscribe(x => {
        console.log(x);
        this.NewUser = x;
        /*this.localStorageId.setLocalStorage(x['id'], x['accessKey']);*/
      });
      if (this.NewUser != null) {
        this.router.navigate(['/login']);
      }
    }
  }
}
