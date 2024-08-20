import { TestBed } from '@angular/core/testing';

import { ProductdeactivateGuard } from './productdeactivate.guard';

describe('ProductdeactivateGuard', () => {
  let guard: ProductdeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProductdeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
