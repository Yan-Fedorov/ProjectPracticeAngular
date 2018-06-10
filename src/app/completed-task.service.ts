import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Guid} from 'guid-typescript';
import {Course} from './CourseField/Course';
import {Observable} from 'rxjs/Observable';
import {CompletedTask} from './CompletedTaskField/CompletedTask';

@Injectable()
export class CompletedTaskService {

  constructor(private http: HttpClient) {
  }

  GetElements(): Observable<CompletedTask[]> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Auth': 'False'})
    };
    return this.http.get<CompletedTask[]>('http://localhost:7505/api/completedTask', httpOptions);
  }

  getItem(id: Guid): Observable<CompletedTask> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Auth': 'False'})
    };
    return this.http.get<CompletedTask>
    (`http://localhost:7505/api/completedTask/${id}`, httpOptions);
  }

  updateItem(id: Guid, item: CompletedTask): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Auth': 'True'})
    };
    return this.http.post(`http://localhost:7505/api/completedTask/${id}`, item, httpOptions);
  }

  addItem(item: CompletedTask): Observable<CompletedTask> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Auth': 'True'})
    };
    return this.http.post<CompletedTask>(`http://localhost:7505/api/completedTask`, item, httpOptions);
  }


}
