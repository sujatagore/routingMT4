import { TestBed } from '@angular/core/testing';

import { UsersresolverService } from './usersresolver.service';

describe('UsersresolverService', () => {
  let service: UsersresolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersresolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
