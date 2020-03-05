import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagosReporteComponent } from './pagos-reporte.component';

describe('PagosComponent', () => {
  let component: PagosReporteComponent;
  let fixture: ComponentFixture<PagosReporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PagosReporteComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagosReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
