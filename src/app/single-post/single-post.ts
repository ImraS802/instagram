import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../interfaces/post';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-single-post',
  imports: [CommonModule, FormsModule],
  templateUrl: './single-post.html',
  styleUrl: './single-post.scss',
})
export class SinglePost {
  // parent sends data to child
  @Input() post!: Post;
  //The child component (SinglePost) will send data to the parent (MainPage)
  //EventEmitter<string> means we will send a string (the new comment text)
  @Output() addCommentEvent = new EventEmitter<string>();

  newComment: string = ''; // saves text in input field

  sendComment() {
    if (this.newComment != '') {
      this.addCommentEvent.emit(this.newComment);
      this.newComment = ''; // empties input field
    }
  }

  toggleLike(post: Post) {
    if (post.isLiked) {
      post.isLiked = false;
      post.likes--;
    } else {
      post.isLiked = true;
      post.likes++;
    }
  }
}
