import { Component, OnInit } from '@angular/core';
import {SignOut} from '../SignOut';
import {LocalStorageService} from '../local-storage.service';
import {CourseService} from '../course.service';
import {Course} from '../CourseField/Course';
import {Task} from '../TaskField/Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(public signOut: SignOut, private  localStorage: LocalStorageService, private courseService: CourseService) { }
  public course: Course;
  public tasks;
  public currentTask: Task;
  ngOnInit() {
    let courseId = this.localStorage.getCourseId();
    this.courseService.getItem(courseId).subscribe(x => {this.course = x;
    this.tasks = this.course.tasks; }
    );
  }
  public StartTask(task: Task): void {
    this.currentTask = task;
  }

}
