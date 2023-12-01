import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { catLoverGuard } from './cat-lover.guard';

describe('catLoverGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => catLoverGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
