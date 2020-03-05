import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ApprovalStateComponent } from './approvalstate.component';

describe('ApprovalStateComponent', () => {
   let component: ApprovalStateComponent;
   let fixture: ComponentFixture<ApprovalStateComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ApprovalStateComponent]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(ApprovalStateComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});