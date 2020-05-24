import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'http://localhost:4201';
  private reqUrl='/api/users';

  result:any;

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.baseUrl}${this.reqUrl}`)
      .subscribe(res => this.result = res);
  }

}