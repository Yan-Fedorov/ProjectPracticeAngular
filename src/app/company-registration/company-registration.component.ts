import { Component, OnInit } from '@angular/core';
import {User} from '../UserField/User';
import {Router} from '@angular/router';
import {UserService} from '../user.service';
import {LocalStorageService} from '../local-storage.service';
import {CompanyService} from '../company.service';
import {Company} from '../CompanyField/Company';

@Component({
  selector: 'app-company-registration',
  templateUrl: './company-registration.component.html',
  styleUrls: ['./company-registration.component.css']
})
export class CompanyRegistrationComponent implements OnInit {

  public Name: string;
  public Password: string;
  public ConfirmPassword: string;
  public Updates;
  private NewCompany;

  constructor(private companyService: CompanyService, private  localStorageId: LocalStorageService, private router: Router) {
  }

  ngOnInit() {
  }

  registerCompany(): void {
    if (this.Password === this.ConfirmPassword) {
      const company: Company = new Company(this.Name , this.Password);
      this.companyService.addItem(company).subscribe(x => {
        console.log(x);
        this.NewCompany = x;
        /*this.localStorageId.setLocalStorage(x['id'], x['accessKey']);*/
      });
      if (this.NewCompany != null) {
        this.router.navigate(['/companyLogin']);
      }
    }
  }
}
