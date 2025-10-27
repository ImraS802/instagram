import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SubscribersService {
  subscribers = [
    { name: 'Anna Müller', followed: true, followsYou: true },
    { name: 'Bernd Schmidt', followed: false, followsYou: false },
    { name: 'Clara Fischer', followed: true, followsYou: false },
    { name: 'David Weber', followed: false, followsYou: true },
    { name: 'Eva Becker', followed: true, followsYou: true },
  ];

  toggleFollow(subscriber: any) {
    subscriber.followed = !subscriber.followed;
  }
}
