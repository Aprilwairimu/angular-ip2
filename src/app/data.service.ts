import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Data} from './data'
@Injectable({
  providedIn: 'root'
})
export class DataService {
  getDatas() {
    return Data;
  }

 

  constructor(private httpClient: HttpClient) { }
}
