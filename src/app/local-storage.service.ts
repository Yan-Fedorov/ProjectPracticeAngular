import { Injectable } from '@angular/core';
import {Guid} from 'guid-typescript';

@Injectable()
export class LocalStorageService {

  constructor() { }
  public getEmail(): string {
    const localStorageItem = JSON.parse(localStorage.getItem('email'));
    return localStorageItem == null ? [] : localStorageItem.email;
  }
  public getKey(): string {
    const localStorageItem = localStorage.getItem('accessKey');
    return localStorageItem;
  }
  public getId(): Guid {
    const localStorageItem = localStorage.getItem('id');
    return Guid.parse(localStorageItem);
  }
  public setLocalStorage(accessKey: string, id: Guid): void {
    localStorage.setItem('accessKey', accessKey);
    localStorage.setItem('id', id.toString());
  }
  public setLocalCourse(id: Guid): void {
    localStorage.setItem('id', id.toString());
  }
  public getCourseId(): Guid {
    const localStorageCourse = localStorage.getItem('id');
    return Guid.parse(localStorageCourse);
  }
  public ClearLocalStorage() {
    localStorage.clear();
  }

}
