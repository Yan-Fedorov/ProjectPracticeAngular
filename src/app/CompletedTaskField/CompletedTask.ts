import {Task} from '../TaskField/Task';
import {Guid} from 'guid-typescript';

export  class  CompletedTask {
  public Id: Guid;
  public Task: Task;
  public ReceivedPoints: number;
  public Solution: string;
}
