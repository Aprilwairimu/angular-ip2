import { Injectable } from '@angular/core';
import {Data} from './data'
@Injectable({
  providedIn: 'root'
})
export class DataService {
  getDatas() {
    return Data;
  }

  // getData(string: string) {
  //   for (let data of Data) {
  //     if (data.string == string) {
        
  //     }
  //   }
  // }

  constructor() { }
}
