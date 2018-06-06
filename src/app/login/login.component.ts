import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from '../local-storage.service';
import {Observable} from 'rxjs/Observable';
import {User} from '../UserField/User';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {LocalStorage} from '../LocalStorage';
import {Guid} from 'guid-typescript';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;
  public UserData: LocalStorage;

  constructor(public localStorage: LocalStorageService, private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
  }

  public loginUser(): void {
    this.loginRequest()
      .subscribe(x => {
        this.UserData = x;
        this.localStorage.setLocalStorage(this.UserData.access_token, Guid.parse(this.UserData.username));
        if (this.UserData != null) {
          this.router.navigate(['/user-page']);
        }
      });
  }

  public loginRequest(): Observable<any> {
    const body = new URLSearchParams();
    body.set('email', this.email);
    body.set('password', this.password);

    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded', 'Auth': 'False'})
    };
    return this.http.post<User>(`http://localhost:7505/api/Account/token`, body.toString(), options);
  }
}
