import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonRepresentativeAttachmentComponent } from './personrepresentativeattachment.component';

describe('PersonRepresentativeAttachmentComponent', () => {
   let component: PersonRepresentativeAttachmentComponent;
   let fixture: ComponentFixture<PersonRepresentativeAttachmentComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [PersonRepresentativeAttachmentComponent]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(PersonRepresentativeAttachmentComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});