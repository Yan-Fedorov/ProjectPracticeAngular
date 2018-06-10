import {Task} from '../TaskField/Task';
import {Guid} from 'guid-typescript';

export  class  CompletedTask {
  public id: Guid;
  public task: Task;
  public receivedPoints: number;
  public solution: string;
  constructor(task: Task, receivedPoints: number, solution: string) {
    this.task = task;
    this.receivedPoints = receivedPoints;
    this.solution = solution;
  }
}
