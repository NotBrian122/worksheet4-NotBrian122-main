import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addmovie } from './addmovie';

describe('Addmovie', () => {
  let component: Addmovie;
  let fixture: ComponentFixture<Addmovie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addmovie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addmovie);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
