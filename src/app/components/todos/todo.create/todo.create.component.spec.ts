import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Todo.CreateComponent } from './todo.create.component';

describe('Todo.CreateComponent', () => {
  let component: Todo.CreateComponent;
  let fixture: ComponentFixture<Todo.CreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Todo.CreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Todo.CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
