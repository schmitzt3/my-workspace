import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-lib-core',
  template: `
    <p>
      my-lib-core works!
    </p>
  `,
  styles: []
})
export class MyLibCoreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
