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
});
