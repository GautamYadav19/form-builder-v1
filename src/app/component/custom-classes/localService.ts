import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalService {
  elementUpdated = new BehaviorSubject('test');
  setElementUpdatedValue(value: any) {
    this.elementUpdated.next(value);
  }
  constructor() {}
  saveData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data)); // Serializes data
  }

  getData(key: string): any {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null; // Deserializes data
  }

  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }
}
