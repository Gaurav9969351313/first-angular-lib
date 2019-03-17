import { TestBed } from '@angular/core/testing';

import { MyNewLibService } from './my-new-lib.service';

describe('MyNewLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyNewLibService = TestBed.get(MyNewLibService);
    expect(service).toBeTruthy();
  });
});
