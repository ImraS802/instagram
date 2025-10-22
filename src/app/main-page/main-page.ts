import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Post } from '../interfaces/post';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-page',
  imports: [CommonModule, RouterLink],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {
  posts: Post[] = [
    {
      name: 'Hans',
      img: './img/banana.jpg',
      likes: 1,
      isLiked: false,
    },
    {
      name: 'Franz',
      img: './img/currant.jpg',
      likes: 900,
      isLiked: true,
    },
    {
      name: 'Beate',
      img: './img/orange.jpg',
      likes: 1356,
      isLiked: true,
    },
  ];

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
