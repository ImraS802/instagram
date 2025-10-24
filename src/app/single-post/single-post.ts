import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-single-post',
  imports: [CommonModule],
  templateUrl: './single-post.html',
  styleUrl: './single-post.scss',
})
export class SinglePost {
  @Input() post!: Post;

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
