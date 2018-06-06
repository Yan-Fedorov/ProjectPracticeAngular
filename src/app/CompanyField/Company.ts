import {Guid} from 'guid-typescript';
import {Course} from '../CourseField/Course';
import {CompanyNotification} from '../CompanyNotificationField/CompanyNotification';

export class Company {
  public id: Guid;
  public name: string;
  public password: string;
  public contacts: string;
  public info: string;
  public courses: Array<Course>;
  public notifications: Array<CompanyNotification>;
  constructor(name: string, password: string) {
    this.name = name;
    this.password = password;
  }
}
