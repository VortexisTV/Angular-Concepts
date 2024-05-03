import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  name = 'Thomas';
  itemImageUrl = 'https://genspark.net/wp-content/uploads/2021/06/logo_GenSpark-e1624721945722-300x85.png';
  ariaLabel = 'Click me';
  showElement = true;
  items = ['Item 1', 'Item 2', 'Item 3'];
  status = 'received';
  color = 'red';
}