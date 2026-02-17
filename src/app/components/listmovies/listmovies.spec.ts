import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listmovies } from './listmovies';

describe('Listmovies', () => {
  let component: Listmovies;
  let fixture: ComponentFixture<Listmovies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listmovies]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listmovies);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('displays a movie note in the list', async () => {
    const moviesService = TestBed.inject<any>("Movieservice" as any) as any;
    // add a movie with a note
    moviesService.addMovie('Title X', 42, 'Director', '2020', 'visible note');
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('visible note');
  });
});
