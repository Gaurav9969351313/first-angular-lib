import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-new-lib',
  template: `
    <p>
      my-new-lib works!
    </p>
  `,
  styles: []
})
export class MyNewLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
