import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lalallala';
  name = 'jun';
  user = {
    first: "jun",
    last: "wang"
  };
  number = 5;
  today = new Date();
}
