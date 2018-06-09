import { Component, OnInit } from '@angular/core';
import {LocalStorage} from '../LocalStorage';
import {Guid} from 'guid-typescript';
import {User} from '../UserField/User';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LocalStorageService} from '../local-storage.service';

@Component({
  selector: 'app-company-login',
  templateUrl: './company-login.component.html',
  styleUrls: ['./company-login.component.css']
})
export class CompanyLoginComponent implements OnInit {

  public name: string;
  public password: string;
  public CompanyData: LocalStorage;

  constructor(public localStorage: LocalStorageService, private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
  }

  public loginCompany(): void {
    this.loginRequest()
      .subscribe(x => {
        this.CompanyData = x;
        this.localStorage.setLocalStorage(this.CompanyData.access_token, Guid.parse(this.CompanyData.username));
        if (this.CompanyData != null) {
          this.router.navigate(['/company-page']);
        }
      });
  }

  public loginRequest(): Observable<any> {
    const body = new URLSearchParams();
    body.set('name', this.name);
    body.set('password', this.password);

    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded', 'Auth': 'False'})
    };
    return this.http.post<User>(`http://localhost:7505/api/Account/token`, body.toString(), options);
  }

}
