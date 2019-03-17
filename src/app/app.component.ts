import { Component,OnInit } from '@angular/core';
import { MyNewLibService } from "my-new-lib";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  // https://dev.to/nieds/getting-started-building-component-libraries-with-angular-cli-4ncj
  title = 'app';
  currentCount = 0;

  constructor(private myNewLibService: MyNewLibService) {}

  ngOnInit() {
    // this.myNewLibService.sucess("Hello ")
  }

  handleCountChanged(e) {
    this.currentCount = e;
  }
}
