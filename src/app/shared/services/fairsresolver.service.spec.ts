import { TestBed } from '@angular/core/testing';

import { FairsresolverService } from './fairsresolver.service';

describe('FairsresolverService', () => {
  let service: FairsresolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FairsresolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
