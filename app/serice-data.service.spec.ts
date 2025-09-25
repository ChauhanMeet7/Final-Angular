import { TestBed } from '@angular/core/testing';

import { SericeDataService } from './serice-data.service';

describe('SericeDataService', () => {
  let service: SericeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SericeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
