import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Post.ListComponent } from './post.list.component';

describe('Post.ListComponent', () => {
  let component: Post.ListComponent;
  let fixture: ComponentFixture<Post.ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Post.ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Post.ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
