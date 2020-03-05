import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PayMassFileAttachmentComponent } from './paymassfileattachment.component';

describe('PayMassFileAttachmentComponent', () => {
   let component: PayMassFileAttachmentComponent;
   let fixture: ComponentFixture<PayMassFileAttachmentComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [PayMassFileAttachmentComponent]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(PayMassFileAttachmentComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});