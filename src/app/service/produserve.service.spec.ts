import { TestBed } from '@angular/core/testing';

import { ProduserveService } from './produserve.service';

describe('ProduserveService', () => {
  let service: ProduserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProduserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
