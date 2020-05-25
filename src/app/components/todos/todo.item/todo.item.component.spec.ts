import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Todo.ItemComponent } from './todo.item.component';

describe('Todo.ItemComponent', () => {
  let component: Todo.ItemComponent;
  let fixture: ComponentFixture<Todo.ItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Todo.ItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Todo.ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
