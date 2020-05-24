import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Subscription } from 'rxjs';
import { Post } from '../post.modal';

@Component({
  selector: 'app-post-list',
  templateUrl: './post.list.component.html',
  styleUrls: ['./post.list.component.styl']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  postsSubscription: Subscription;
  constructor(public postsService: PostsService) {
    this.postsService.getPosts();
   }

  ngOnInit(): void {
    this.postsSubscription = this.postsService.subject
      .subscribe((_post:Post) => this.posts.push(_post));
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}
