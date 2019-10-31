import { TestBed } from '@angular/core/testing';

import { MyLibMocksService } from './my-lib-mocks.service';

describe('MyLibMocksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyLibMocksService = TestBed.get(MyLibMocksService);
    expect(service).toBeTruthy();
  });
});
