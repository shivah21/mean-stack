import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TodosService } from '../../../services/todos.service';
import { Todo } from '@modals/todo.modal';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo.list.component.html',
  styleUrls: ['./todo.list.component.styl']
})
export class TodoListComponent implements OnInit {
  public todos:Todo[] = [];
  private userSubscription:Subscription;
  
  constructor(private todosService: TodosService) {
    this.todosService.getTodos();
  }

  ngOnInit(){
    this.userSubscription = this.todosService.subject
      .subscribe((todo:Todo) => this.todos.push(todo));
  }

  deleteTodo(todo:Todo) {
    this.todos = this.todos.filter( t => t.id !== todo.id);
    this.todosService.deleteTodo(todo).subscribe(res => console.log);
  }

  addTodo(todo: Todo) {
    this.todosService.addTodo(todo);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
