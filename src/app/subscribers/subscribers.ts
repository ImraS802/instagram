import { Component, inject } from '@angular/core';
import { SubscribersService } from '../services/subscribers-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subscribers',
  imports: [CommonModule],
  templateUrl: './subscribers.html',
  styleUrl: './subscribers.scss',
})
export class Subscribers {
  subscriberService = inject(SubscribersService);
  subscribers = this.subscriberService.subscribers;

  toggle(subscriber: any) {
    this.subscriberService.toggleFollow(subscriber);
  }
}
