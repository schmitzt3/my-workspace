import { NgModule } from '@angular/core';

import { MyLibCoreComponent } from './my-lib-core.component';

@NgModule({
  declarations: [MyLibCoreComponent],
  exports: [MyLibCoreComponent]
})
export class MyLibCoreModule { }
