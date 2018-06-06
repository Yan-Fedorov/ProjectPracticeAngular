import {Guid} from 'guid-typescript';

export class Task {
  public id: Guid;
  public info: string;
  public points: number;
  public answers: string;
  public name: string;
}
