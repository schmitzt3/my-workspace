import { Component } from '@angular/core';
import { MyLibCoreService } from 'my-lib-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private myLibCoreService: MyLibCoreService) { }

  title = this.myLibCoreService.getAllTheThings();
}
