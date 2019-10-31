import { Injectable } from '@angular/core';
import { MyLibCoreService } from 'my-lib-core';

console.log('loading my lib service from my lib');

@Injectable()
export class MyLibService implements MyLibCoreService {
  getAllTheThings(): string {
    return 'All The Things From My Lib';
  }
}
