import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { User } from '@modals/user.modal';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl = 'http://localhost:4201';
  private reqUrl='/api/users';
  public subject:Subject<User> = new Subject<User>();

  constructor(private http: HttpClient) { }

  getUsers() {
    this.http
    .get(`${this.baseUrl}${this.reqUrl}`)
    .subscribe(res => {
      return res['data']
        .map((user:User) => this.subject.next(user));
    });
  }

}