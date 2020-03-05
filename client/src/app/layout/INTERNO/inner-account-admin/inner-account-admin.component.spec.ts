import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerAccountAdminComponent } from './inner-account-admin.component';

describe('InnerAccountAdminComponent', () => {
  let component: InnerAccountAdminComponent;
  let fixture: ComponentFixture<InnerAccountAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InnerAccountAdminComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerAccountAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
