import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthorizationAttachmentComponent } from './authorizationattachment.component';

describe('AuthorizationAttachmentComponent', () => {
   let component: AuthorizationAttachmentComponent;
   let fixture: ComponentFixture<AuthorizationAttachmentComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [AuthorizationAttachmentComponent]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(AuthorizationAttachmentComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});