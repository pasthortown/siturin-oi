import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifarioRackComponent } from './tarifario-rack.component';

describe('TarifarioRackComponent', () => {
  let component: TarifarioRackComponent;
  let fixture: ComponentFixture<TarifarioRackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TarifarioRackComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarifarioRackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
