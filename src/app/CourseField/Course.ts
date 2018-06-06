import DateTimeFormat = Intl.DateTimeFormat;
import {Task} from '../TaskField/Task';
import {Guid} from 'guid-typescript';

export class Course {
  public id: Guid;
  public coursId: Guid;
  public name: string;
  public startTime: DateTimeFormat;
  public endTime: DateTimeFormat;
  public vacancy: string;
  public peopleLimit: number;
  public tasks: Array<Task>;
}
