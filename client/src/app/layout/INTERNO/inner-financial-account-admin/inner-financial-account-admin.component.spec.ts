import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerFinancialAccountAdminComponent } from './inner-financial-account-admin.component';

describe('InnerFinancialAccountAdminComponent', () => {
  let component: InnerFinancialAccountAdminComponent;
  let fixture: ComponentFixture<InnerFinancialAccountAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InnerFinancialAccountAdminComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerFinancialAccountAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
