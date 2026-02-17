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

  it('saves a note for an existing movie', () => {
    service.addMovie('The Matrix', 1, 'Wachowski', '1999', 'initial');
    service.saveNote(1, 'updated note');
    const m = service.movies().find(x => x.MovieNumber === 1);
    expect(m?.Note).toBe('updated note');
  });
});
