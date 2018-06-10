import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Guid} from 'guid-typescript';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from './UserField/User';
import {Course} from './CourseField/Course';
import {EditUserComponent} from './edit-user/edit-user.component';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  GetElements(): Observable<User[]> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Auth': 'False'})
    };
    return this.http.get<User[]>('http://localhost:7505/api/user', httpOptions);
  }

  getItem(id: Guid): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Auth': 'False'})
    };
    return this.http.get<User>
    (`http://localhost:7505/api/user/${id}`, httpOptions);
  }

  updateItem(id: Guid, item: User): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Auth': 'True'})
    };
    return this.http.post(`http://localhost:7505/api/user/${id}`, item, httpOptions);
  }

  addItem(item: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Auth': 'False'})
    };
    return this.http.post<User>(`http://localhost:7505/api/user`, item, httpOptions);
  }

  deleteItem(id: Guid): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Auth': 'True'})
    };
    return this.http.delete<User>(`http://localhost:7505/api/user/${id}`, httpOptions);
  }
  getUserInfo(user: User, vm: EditUserComponent) {
    const str = user.name;
    const mas = str.split(' ');
    vm.firstName = mas[0];
      vm.secondName = mas[1];
    vm.email = user.email;
  }

  /*addCourse(user: User, task: Course) {
    user.Courses.
  }*/

}
