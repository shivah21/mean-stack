import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from '../post.modal';

@Component({
  selector: 'app-post-create',
  templateUrl: './post.create.component.html',
  styleUrls: ['./post.create.component.styl']
})
export class PostCreateComponent implements OnInit {
  title:string = '';
  body:string = '';
  postCreated:Post;

  constructor(public postsService: PostsService) {}

  ngOnInit(): void {}

  publishPost(){
    const post:Post = {
      id: null,
      userId: null,
      title: this.title,
      body: this.body
    };
    if(post.title && post.body)
      this.postsService.addPost(post);
  }

}
