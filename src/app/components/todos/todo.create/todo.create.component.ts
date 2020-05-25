import { Component } from '@angular/core';
import { Todo } from '@modals/todo.modal';
import { TodosService } from '../../../services/todos.service';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo.create.component.html',
  styleUrls: ['./todo.create.component.styl']
})
export class TodoCreateComponent {
  private task = '';

  constructor(private todosService:TodosService) { }

  publishTodo(){
    if(this.task){
      this.todosService.addTodo({
        id: null,
        userId: null,
        title: this.task,
        completed: false
      })
    }
  }

}
