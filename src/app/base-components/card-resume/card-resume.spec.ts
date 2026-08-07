import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardResume } from './card-resume';

describe('CardResume', () => {
  let component: CardResume;
  let fixture: ComponentFixture<CardResume>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardResume],
    }).compileComponents();

    fixture = TestBed.createComponent(CardResume);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
