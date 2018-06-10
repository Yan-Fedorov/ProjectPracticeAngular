import {Guid} from 'guid-typescript';

export class Task {
  public id: Guid;
  public info: string;
  public points: number;
  public answers: string;
  public name: string;
  constructor(name: string, answers: string, points: number, info: string) {
    this.name = name;
    this.answers = answers;
    this.points = points;
    this.info = info;

  }
}
