import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainPage } from './main-page/main-page';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, MainPage],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('instagram');
}
