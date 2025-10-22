import { Routes } from '@angular/router';
import { MainPage } from './main-page/main-page';
import { Contact } from './contact/contact';

export const routes: Routes = [
  { path: '', component: MainPage },
  { path: 'contact', component: Contact },
];
