import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  url='./assets/userdata.json';
  constructor(private http:HttpClient) {
   }
  getdata(){
    return this.http.get(this.url);
  }
}
