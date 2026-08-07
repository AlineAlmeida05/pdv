import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteligenciaDeEstoque } from './inteligencia-de-estoque';

describe('InteligenciaDeEstoque', () => {
  let component: InteligenciaDeEstoque;
  let fixture: ComponentFixture<InteligenciaDeEstoque>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteligenciaDeEstoque],
    }).compileComponents();

    fixture = TestBed.createComponent(InteligenciaDeEstoque);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
