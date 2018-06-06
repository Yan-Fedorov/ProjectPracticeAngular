import { Guid } from 'guid-typescript';
import {CompletedTask} from '../CompletedTaskField/CompletedTask';
import {UserNotification} from '../UserNotificationField/UserNotification';
import {Course} from '../CourseField/Course';

export class User {
  public Id: Guid;
  public name: string;
  public Password: string;
  public email: string ;
  public Info: string;
  public CompletedTasks: Array<CompletedTask>;
  public Notifications:  Array<UserNotification>;
  public Courses:  Array<Course>;
  constructor(name: string, password: string, email: string) {
      this.name = name;
      this.Password = password;
      this.email = email;
  }
}
