import { Component, OnInit } from '@angular/core';
import {SignOut} from '../SignOut';
import {UserCoursesService} from '../user-courses.service';
import {Guid} from 'guid-typescript';
import {CourseService} from '../course.service';
import {Course} from '../CourseField/Course';
import {LocalStorageService} from '../local-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  constructor(public signOut: SignOut, private userCourseService: UserCoursesService, private courseService: CourseService,
              private router: Router) { }
  public courses: Course[];
  public courseName = [];
  ngOnInit() {
    this.courseService.GetElements().subscribe(x => {  this.courses = x;
      if (this.courses != null) {
        let i = 0;
        for (let course of this.courses) {
          this.courseName[i] = course.name;
          i++;
        }
      }});
  }
  addCourse(id: Guid): void {
    this.userCourseService.addItem(id).subscribe(x => { const newCourse = x;
    console.log(x); });
}
  courseSelect(): void {
  }
}


