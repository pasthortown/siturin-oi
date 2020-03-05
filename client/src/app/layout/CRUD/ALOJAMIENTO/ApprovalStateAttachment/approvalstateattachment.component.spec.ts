import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ApprovalStateAttachmentComponent } from './approvalstateattachment.component';

describe('ApprovalStateAttachmentComponent', () => {
   let component: ApprovalStateAttachmentComponent;
   let fixture: ComponentFixture<ApprovalStateAttachmentComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ApprovalStateAttachmentComponent]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(ApprovalStateAttachmentComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});