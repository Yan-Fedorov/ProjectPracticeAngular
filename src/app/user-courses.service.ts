import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from './UserField/User';
import {Guid} from 'guid-typescript';
import {Course} from './CourseField/Course';

@Injectable()
export class UserCoursesService {

  constructor(private http: HttpClient) {
  }

  GetElements(): Observable<Course[]> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'Auth': 'True'})
    };
    return this.http.get<Course[]>('http://localhost:7505/api/usercourses', httpOptions);
  }

  addItem(item: Guid): Observable<object> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'Auth': 'True'})
    };
    return this.http.post<object>(`http://localhost:7505/api/usercourses/${item}`, null, httpOptions);
  }

}
