import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Post } from '@modals/post.modal';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private baseUrl = 'http://localhost:4201';
  private reqUrl='/api/posts';
  public subject:Subject<Post> = new Subject<Post>();

  constructor(private http:HttpClient) { }

  getPosts(userId=1): void{
    this.http
    .get(`${this.baseUrl}${this.reqUrl}`)
    .subscribe(res => {
      return res['data']
      .filter((_post:Post) => userId ? _post.userId == userId : true)
      .map((_post:Post) => this.subject.next(_post))
    });
  }

  addPost(post:Post){
    this.subject.next(post);
  }
}
