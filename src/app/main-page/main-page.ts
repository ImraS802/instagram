import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Post } from '../interfaces/post';
import { RouterLink } from '@angular/router';
import { SinglePost } from '../single-post/single-post';
import { Subscribers } from '../subscribers/subscribers';

@Component({
  selector: 'app-main-page',
  imports: [CommonModule, RouterLink, SinglePost, Subscribers],
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
      comments: ['Toll'],
    },
    {
      name: 'Franz',
      img: './img/currant.jpg',
      likes: 900,
      isLiked: true,
      comments: ['Nice'],
    },
    {
      name: 'Beate',
      img: './img/orange.jpg',
      likes: 1356,
      isLiked: true,
      comments: ['Schön'],
    },
  ];

  // comment: string ->The text of the new comment (e.g. "Nice picture!")
  // index: number -> Which post the comment belongs to (e.g. the 2nd post)
  addComment(comment: string, index: number) {
    this.posts[index].comments.push(comment);
  }
  // this.posts[index] -> Selects one specific post from the posts list
  // .comments -> Accesses that post’s list of comments
  // .push(comment -> Adds the new comment to the end of the array
}
