import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-main-page',
  imports: [CommonModule],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {
  posts: Post[] = [
    {
      name: 'Hans',
      img: './img/banana.jpg',
      likes: 1,
    },
    {
      name: 'Franz',
      img: './img/currant.jpg',
      likes: 900,
    },
    {
      name: 'Beate',
      img: './img/orange.jpg',
      likes: 1356,
    },
  ];
}
