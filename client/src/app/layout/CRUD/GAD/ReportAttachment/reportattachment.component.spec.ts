import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportAttachmentComponent } from './reportattachment.component';

describe('ReportAttachmentComponent', () => {
   let component: ReportAttachmentComponent;
   let fixture: ComponentFixture<ReportAttachmentComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ReportAttachmentComponent]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(ReportAttachmentComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});