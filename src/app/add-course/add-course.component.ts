import {Component, OnInit} from '@angular/core';
import {Course} from '../CourseField/Course';
import {SignOut} from '../SignOut';
import {LocalStorageService} from '../local-storage.service';
import {CourseService} from '../course.service';
import {Guid} from 'guid-typescript';
import {CompanyService} from '../company.service';
import {Company} from '../CompanyField/Company';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  public course: Course;
  public company: Company;
  public nameOfCourse: string;
  public startTime;
  public endTime;
  public vacancy: string;
  public peopleLimit: number;

  constructor(private localStorage: LocalStorageService, private  courseService: CourseService, public signOut: SignOut,
              private  companyService: CompanyService) {
  }

  ngOnInit() {
    this.companyService.getItem(this.localStorage.getId()).subscribe(x => {
      this.company = x;
    });
  }

  addCourseInfo(): void {
    const course = new Course(this.nameOfCourse, this.startTime, this.endTime, this.vacancy, this.peopleLimit);
    this.courseService.addItem(course).subscribe(x => {
      console.log(x);
      this.course = x;
    });
  }

  addCourseToCompany(): void {
    this.company.courses.push(this.course);
    this.companyService.updateItem(this.company.id, this.company).subscribe(x => {
      console.log(x);
    });
  }
}
