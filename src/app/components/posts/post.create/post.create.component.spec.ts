import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Post.CreateComponent } from './post.create.component';

describe('Post.CreateComponent', () => {
  let component: Post.CreateComponent;
  let fixture: ComponentFixture<Post.CreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Post.CreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Post.CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
