import { NgModule } from '@angular/core';
import { MyLibCoreService } from 'my-lib-core';

import { MyLibComponent } from './my-lib.component';
import { MyLibService } from './my-lib.service';

@NgModule({
  declarations: [MyLibComponent],
  exports: [MyLibComponent],
  providers: [
    { provide: MyLibCoreService, useClass: MyLibService }
  ]
})
export class MyLibModule { }
