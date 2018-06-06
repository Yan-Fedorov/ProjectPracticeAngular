import { Component, OnInit } from '@angular/core';
import {SignOut} from '../SignOut';
import {UserCoursesService} from '../user-courses.service';
import {forEach} from '@angular/router/src/utils/collection';
import {Course} from '../CourseField/Course';
import {Guid} from 'guid-typescript';
import {LocalStorageService} from '../local-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-courses',
  templateUrl: './user-courses.component.html',
  styleUrls: ['./user-courses.component.css']
})
export class UserCoursesComponent implements OnInit {

  constructor(public signOut: SignOut, private userCoursesService: UserCoursesService, private localStorage: LocalStorageService,
              private router: Router) { }
  public userCourses: Course[];

  ngOnInit() {
    this.userCoursesService.GetElements().subscribe(x => {  this.userCourses = x;
});

  }
  courseSelect(courseId: Guid): void {
    this.localStorage.setLocalCourse(courseId);
    this.router.navigate(['/task']);
  }

}
