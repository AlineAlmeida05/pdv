import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconClose } from './icon-close';

describe('IconClose', () => {
  let component: IconClose;
  let fixture: ComponentFixture<IconClose>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconClose],
    }).compileComponents();

    fixture = TestBed.createComponent(IconClose);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
