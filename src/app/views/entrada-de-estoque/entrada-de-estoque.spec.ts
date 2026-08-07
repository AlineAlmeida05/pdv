import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaDeEstoque } from './entrada-de-estoque';

describe('EntradaDeEstoque', () => {
  let component: EntradaDeEstoque;
  let fixture: ComponentFixture<EntradaDeEstoque>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntradaDeEstoque],
    }).compileComponents();

    fixture = TestBed.createComponent(EntradaDeEstoque);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
