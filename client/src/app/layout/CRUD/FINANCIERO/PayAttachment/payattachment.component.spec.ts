import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PayAttachmentComponent } from './payattachment.component';

describe('PayAttachmentComponent', () => {
   let component: PayAttachmentComponent;
   let fixture: ComponentFixture<PayAttachmentComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [PayAttachmentComponent]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(PayAttachmentComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});