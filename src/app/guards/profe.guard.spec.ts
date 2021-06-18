import { TestBed } from '@angular/core/testing';

import { ProfeGuard } from './profe.guard';

describe('ProfeGuard', () => {
  let guard: ProfeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProfeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
