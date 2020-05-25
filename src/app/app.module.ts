import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';

// Import the Http Module and our Data Service
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostCreateComponent } from './components/posts/post.create/post.create.component';
import { PostListComponent } from './components/posts/post.list/post.list.component';
import { TodoListComponent } from './components/todos/todo.list/todo.list.component';
import { TodoCreateComponent } from './components/todos/todo.create/todo.create.component';
import { TodoItemComponent } from './components/todos/todo.item/todo.item.component';

//Providers
import { UsersService } from './services/users.service';
import { PostsService } from './services/posts.service';
import { TodosService } from './services/todos.service';

//Angular Material
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    PostListComponent,
    TodoListComponent,
    TodoCreateComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatListModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule
  ],
  providers: [UsersService, PostsService, TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
