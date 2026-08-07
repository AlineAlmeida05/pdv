import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoDeEntradas } from './historico-de-entradas';

describe('HistoricoDeEntradas', () => {
  let component: HistoricoDeEntradas;
  let fixture: ComponentFixture<HistoricoDeEntradas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoricoDeEntradas],
    }).compileComponents();

    fixture = TestBed.createComponent(HistoricoDeEntradas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
