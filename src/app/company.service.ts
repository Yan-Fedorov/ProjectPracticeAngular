import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Guid} from 'guid-typescript';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Company} from './CompanyField/Company';
import {Course} from './CourseField/Course';

@Injectable()
export class CompanyService {

  constructor(private http: HttpClient) {
  }

  GetElements(): Observable<Company[]> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Auth': 'False'})
    };
    return this.http.get<Company[]>('http://localhost:7505/api/company', httpOptions);
  }

  getItem(id: Guid): Observable<Company> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Auth': 'False'})
    };
    return this.http.get<Company>
    (`http://localhost:7505/api/company/${id}`, httpOptions);
  }

  updateItem(id: Guid, item: Company): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Auth': 'True'})
    };
    return this.http.post(`http://localhost:7505/api/company/${id}`, item, httpOptions);
  }

  addItem(item: Company): Observable<Company> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Auth': 'False'})
    };
    return this.http.post<Company>(`http://localhost:7505/api/company`, item, httpOptions);
  }

  deleteItem(id: Guid): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Auth': 'True'})
    };
    return this.http.delete<Company>(`http://localhost:7505/api/company/${id}`, httpOptions);
  }
}
