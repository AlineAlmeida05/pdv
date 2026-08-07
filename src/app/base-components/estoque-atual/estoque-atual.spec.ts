import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoqueAtual } from './estoque-atual';

describe('EstoqueAtual', () => {
  let component: EstoqueAtual;
  let fixture: ComponentFixture<EstoqueAtual>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstoqueAtual],
    }).compileComponents();

    fixture = TestBed.createComponent(EstoqueAtual);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
