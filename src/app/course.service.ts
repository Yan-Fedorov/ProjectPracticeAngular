import { Injectable } from '@angular/core';
import {EditUserComponent} from './edit-user/edit-user.component';
import {User} from './UserField/User';
import {Guid} from 'guid-typescript';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Course} from './CourseField/Course';

@Injectable()
export class CourseService {

  constructor(private http: HttpClient) {
  }

  GetElements(): Observable<Course[]> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Auth': 'False'})
    };
    return this.http.get<Course[]>('http://localhost:7505/api/task', httpOptions);
  }

  getItem(id: Guid): Observable<Course> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Auth': 'False'})
    };
    return this.http.get<Course>
    (`http://localhost:7505/api/course/${id}`, httpOptions);
  }

  updateItem(id: Guid, item: Course): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Auth': 'True'})
    };
    return this.http.post(`http://localhost:7505/api/course/${id}`, item, httpOptions);
  }

  addItem(item: Course): Observable<Course> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Auth': 'True'})
    };
    return this.http.post<Course>(`http://localhost:7505/api/course`, item, httpOptions);
  }
  addItemToCourse(item: Course): Observable<Course> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Auth': 'True'})
    };
    return this.http.post<Course>(`http://localhost:7505/api/course/addToCompany`, item, httpOptions);
  }

  deleteItem(id: Guid): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Auth': 'True'})
    };
    return this.http.delete<Course>(`http://localhost:7505/api/course/${id}`, httpOptions);
  }
  getUserInfo(user: User, vm: EditUserComponent) {
    const str = user.name;
    const mas = str.split(' ');
    vm.firstName = mas[0];
    vm.secondName = mas[1];
    vm.email = user.email;
  }

}
