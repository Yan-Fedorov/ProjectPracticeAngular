import { Component, OnInit } from '@angular/core';
import {SignOut} from '../SignOut';
import {CompanyService} from '../company.service';
import {Company} from '../CompanyField/Company';
import {LocalStorageService} from '../local-storage.service';
import {Guid} from 'guid-typescript';
import {Course} from '../CourseField/Course';
import {Router} from '@angular/router';

@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.css']
})
export class CompanyPageComponent implements OnInit {
  public courses: Course[];
  private companyId: Guid;
  public company: Company;

  constructor(public signOut: SignOut, private  companyService: CompanyService, private  localStorage: LocalStorageService, private router: Router) { }

  ngOnInit() {
    this.companyId = this.localStorage.getId();
    this.companyService.getItem(this.companyId).subscribe(x => {this.company = x;
    this.courses = this.company.courses; });
  }
  selectCourse(id: Guid): void {
    this.localStorage.setLocalCourse(id);
    if (id != null) {
      this.router.navigate(['/edit-course']);
    }
  }
}
