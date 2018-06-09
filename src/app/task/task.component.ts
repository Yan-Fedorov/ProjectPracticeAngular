import {Component, OnInit} from '@angular/core';
import {SignOut} from '../SignOut';
import {LocalStorageService} from '../local-storage.service';
import {CourseService} from '../course.service';
import {Course} from '../CourseField/Course';
import {Task} from '../TaskField/Task';
import {Observable} from 'rxjs/Observable';
import {Guid} from 'guid-typescript';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(public signOut: SignOut, private  localStorage: LocalStorageService, private courseService: CourseService,
              private http: HttpClient) {
  }

  public course: Course;
  public tasks;
  public currentTask: Task;
  public textCompile: string = '#include &lt;iostream&gt;\n' +
    '    int main()\n' +
    '    {\n' +
    '    std::cout << "main function\\n";\n' +
    '    }';

  ngOnInit() {
    /* let courseId = this.localStorage.getCourseId();
     this.courseService.getItem(courseId).subscribe(x => {this.course = x;
     this.tasks = this.course.tasks; }
  );
  */
  }

  public StartTask(task: Task): void {
    this.currentTask = task;
  }

  sendItem(to_compile: string): void {
    /*to_compile = this.textCompile;
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.post('http://coliru.stacked-crooked.com/compile', to_compile, httpOptions);*/
    try {
      const w: any = window;
      const x = w.eval('(function(window){\n ' + to_compile + '\n})({})');
      console.log(x);
    } catch (e) {
      console.error(e);
    }
  }
}
