import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // https://dev.to/nieds/getting-started-building-component-libraries-with-angular-cli-4ncj
  title = 'app';
  currentCount = 0;

  handleCountChanged(e) {
    this.currentCount = e;
  }
}
