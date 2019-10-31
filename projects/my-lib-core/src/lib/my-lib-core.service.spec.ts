import { TestBed } from '@angular/core/testing';

import { MyLibCoreService } from './my-lib-core.service';

describe('MyLibCoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyLibCoreService = TestBed.get(MyLibCoreService);
    expect(service).toBeTruthy();
  });
});
