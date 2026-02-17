import { TestBed } from '@angular/core/testing';

import { Movieservice } from './movies';

describe('Movies', () => {
  let service: Movieservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Movieservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
