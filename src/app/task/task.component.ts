import {Component, OnInit} from '@angular/core';
import {SignOut} from '../SignOut';
import {LocalStorageService} from '../local-storage.service';
import {CourseService} from '../course.service';
import {Course} from '../CourseField/Course';
import {Task} from '../TaskField/Task';
import {Observable} from 'rxjs/Observable';
import {Guid} from 'guid-typescript';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CompletedTask} from '../CompletedTaskField/CompletedTask';
import {CompletedTaskService} from '../completed-task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(public signOut: SignOut, private  localStorage: LocalStorageService, private courseService: CourseService,
              private http: HttpClient, private completedTaskService: CompletedTaskService) {
  }

  public course: Course;
  public tasks;
  public currentTask: Task;
  public textCompile: string;
  public resultOfCompilation;
  public completedTask: CompletedTask;

  ngOnInit() {
     let courseId = this.localStorage.getCourseId();
     this.courseService.getItem(courseId).subscribe(x => {this.course = x;
     this.tasks = this.course.tasks; }
  );
  }

  public StartTask(task: Task): void {
    this.currentTask = task;
  }

  compile(to_compile: string): void {
    try {
      const w: any = window;
      this.resultOfCompilation = w.eval('(function(window){\n ' + to_compile + '\n})({})');
      console.log(this.resultOfCompilation);
    } catch (e) {
      console.error(e);
    }
    if (this.currentTask.answers === this.resultOfCompilation) {
      this.completedTask = new CompletedTask(this.currentTask, this.currentTask.points, this.resultOfCompilation);
      this.completedTaskService.addItem(this.completedTask).subscribe(x => {this.completedTask = x; });

    }
  }
}
