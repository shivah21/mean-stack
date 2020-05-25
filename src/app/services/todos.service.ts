import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Todo } from '@modals/todo.modal';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private baseUrl = 'http://localhost:4201';
  private reqUrl='/api/todos';
  public subject:Subject<Todo> = new Subject<Todo>();

  constructor(private http:HttpClient) { }

  getTodos(userId=1){
    this.http
    .get(`${this.baseUrl}${this.reqUrl}`)
    .subscribe(res => {
      return res['data']
      .filter((todo:Todo) => userId ? todo.userId == userId : true)
      .map((todo:Todo) => this.subject.next(todo));
    });
  }

  addTodo(todo:Todo){
    this.subject.next(todo);
    return this.http.post<Todo>(`${this.baseUrl}${this.reqUrl}`, todo, httpOptions);
  }

  toggleCompleted(todo: Todo){
    return this.http.put<Todo>(`${this.baseUrl}${this.reqUrl}`, todo, httpOptions);
  }
  
  deleteTodo(todo: Todo){
    return this.http.delete<Todo>(`${this.baseUrl}${this.reqUrl}/${todo._id}`, httpOptions);
  }
}
