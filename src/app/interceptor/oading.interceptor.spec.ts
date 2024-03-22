import { TestBed } from '@angular/core/testing';

import { OadingInterceptor } from './oading.interceptor';

describe('OadingInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      OadingInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: OadingInterceptor = TestBed.inject(OadingInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
