import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DeclarationAttachmentComponent } from './declarationattachment.component';

describe('DeclarationAttachmentComponent', () => {
   let component: DeclarationAttachmentComponent;
   let fixture: ComponentFixture<DeclarationAttachmentComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [DeclarationAttachmentComponent]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(DeclarationAttachmentComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});