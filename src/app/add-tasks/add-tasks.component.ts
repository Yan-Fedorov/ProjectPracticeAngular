import {Component, OnInit} from '@angular/core';
import {Course} from '../CourseField/Course';
import {SignOut} from '../SignOut';
import {LocalStorageService} from '../local-storage.service';
import {CourseService} from '../course.service';
import {Guid} from 'guid-typescript';
import {CompanyService} from '../company.service';
import {Company} from '../CompanyField/Company';
import {Task} from '../TaskField/Task';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent implements OnInit {
  public task: Task;
  public company: Company;
  public info: string;
  public points: number;
  public answers: string;
  public name: string;
  public courseId: Guid;

  constructor(private localStorage: LocalStorageService, private  taskService: TaskService, public signOut: SignOut,
              private  companyService: CompanyService) {
  }

  ngOnInit() {
    this.companyService.getItem(this.localStorage.getId()).subscribe(x => {
      this.company = x;
      this.courseId = this.localStorage.getCourseId();
    });
  }

  addTaskToCourse(): void {
    const task = new Task(this.name, this.answers, this.points, this.info);
    this.taskService.addItemToCourse(task, this.courseId).subscribe(x => {
      console.log(x);
      this.task = x;
    });
  }
}
