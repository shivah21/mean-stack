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

//Providers
import { DataService } from './services/data.service';
import { PostsService } from './services/posts.service';

//Angular Material
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule
  ],
  providers: [DataService, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
