import { Injectable } from '@angular/core';
import { MyLibCoreService } from 'my-lib-core';

console.log('loading my lib service from my lib mocks');

@Injectable()
export class MyLibMocksService implements MyLibCoreService {
  getAllTheThings(): string {
    return 'All The Things From My Lib Mocks';
  }
}
