import { TestBed } from '@angular/core/testing';

import { MyNewServiceService } from './my-new-service.service';

describe('MyNewServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyNewServiceService = TestBed.get(MyNewServiceService);
    expect(service).toBeTruthy();
  });
});
