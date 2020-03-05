import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ApprovalStateReportComponent } from './approvalstatereport.component';

describe('ApprovalStateReportComponent', () => {
   let component: ApprovalStateReportComponent;
   let fixture: ComponentFixture<ApprovalStateReportComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ApprovalStateReportComponent]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(ApprovalStateReportComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});