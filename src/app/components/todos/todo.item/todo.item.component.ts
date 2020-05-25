import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { TodosService } from '../../../services/todos.service';
import { Todo } from '@modals/todo.modal';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo.item.component.html',
  styleUrls: ['./todo.item.component.styl']
})
export class TodoItemComponent implements OnInit {
  @Input() todo:Todo;
  @Output() deleteTodo:EventEmitter<Todo> = new EventEmitter();

  constructor(private todosService: TodosService) { }

  setClasses(){
    return {
      'todo': true,
      'completed': this.todo.completed
    }
  }

  ngOnInit(): void {
  }

  onToggle(todo:Todo){
    this.todo.completed = !todo.completed;
    this.todosService
    .toggleCompleted(todo)
    .subscribe(res => {
      console.log(res);
    });
  }

  onDelete(todo:Todo){
    this.deleteTodo.emit(todo);
  }

}
