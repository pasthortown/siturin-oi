import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PropertyTitleAttachmentComponent } from './propertytitleattachment.component';

describe('PropertyTitleAttachmentComponent', () => {
   let component: PropertyTitleAttachmentComponent;
   let fixture: ComponentFixture<PropertyTitleAttachmentComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [PropertyTitleAttachmentComponent]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(PropertyTitleAttachmentComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});