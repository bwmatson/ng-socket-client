import { async, inject, TestBed } from '@angular/core/testing';

import { AuthenticationGuard } from './authentication.guard';

describe('IsAuthenticatedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationGuard]
    });
  });

  it('should ...', inject([AuthenticationGuard], (guard: AuthenticationGuard) => {
    expect(guard).toBeTruthy();
  }));
});