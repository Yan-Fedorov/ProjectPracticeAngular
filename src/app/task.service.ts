import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Course} from './CourseField/Course';
import {Observable} from 'rxjs/Observable';
import {Guid} from 'guid-typescript';
import {Task} from './TaskField/Task';

@Injectable()
export class TaskService {

  constructor(private http: HttpClient) {}
  addItemToCourse(item: Task, courseId: Guid): Observable<Task> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Auth': 'True'})
    };
    return this.http.post<Task>(`http://localhost:7505/api/task/${courseId}`, item, httpOptions);
  }
}
