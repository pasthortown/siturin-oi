import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EstablishmentCertificationAttachmentComponent } from './establishmentcertificationattachment.component';

describe('EstablishmentCertificationAttachmentComponent', () => {
   let component: EstablishmentCertificationAttachmentComponent;
   let fixture: ComponentFixture<EstablishmentCertificationAttachmentComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [EstablishmentCertificationAttachmentComponent]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(EstablishmentCertificationAttachmentComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});