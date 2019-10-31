import { NgModule } from '@angular/core';
import { MyLibCoreService } from 'my-lib-core';

import { MyLibMocksComponent } from './my-lib-mocks.component';
import { MyLibMocksService } from './my-lib-mocks.service';

@NgModule({
  declarations: [MyLibMocksComponent],
  exports: [MyLibMocksComponent],
  providers: [
    { provide: MyLibCoreService, useClass: MyLibMocksService }
  ]
})
export class MyLibMocksModule { }
