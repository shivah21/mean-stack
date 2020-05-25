import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Todo.ListComponent } from './todo.list.component';

describe('Todo.ListComponent', () => {
  let component: Todo.ListComponent;
  let fixture: ComponentFixture<Todo.ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Todo.ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Todo.ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
