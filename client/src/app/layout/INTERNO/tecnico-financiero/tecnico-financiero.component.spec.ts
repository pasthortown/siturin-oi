import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicoFinancieroComponent } from './tecnico-financiero.component';

describe('TecnicoFinancieroComponent', () => {
  let component: TecnicoFinancieroComponent;
  let fixture: ComponentFixture<TecnicoFinancieroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TecnicoFinancieroComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnicoFinancieroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
