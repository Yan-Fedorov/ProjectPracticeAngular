import { Component, OnInit } from '@angular/core';
import {Course} from '../CourseField/Course';
import {LocalStorageService} from '../local-storage.service';
import {CourseService} from '../course.service';
import {SignOut} from '../SignOut';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  public course: Course;
  constructor(private localStorage: LocalStorageService, private  courseService: CourseService, public signOut: SignOut) { }

  ngOnInit() {
    let courseId = this.localStorage.getCourseId();
    this.courseService.getItem(courseId).subscribe(x => {this.course = x; });
  }

  editCourseInfo(): void {
    this.courseService.updateItem(this.course.id, this.course).subscribe(x => console.log(x));
  }

}
