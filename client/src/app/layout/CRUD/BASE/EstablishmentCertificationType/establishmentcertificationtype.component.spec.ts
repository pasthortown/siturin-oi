import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EstablishmentCertificationTypeComponent } from './establishmentcertificationtype.component';

describe('EstablishmentCertificationTypeComponent', () => {
   let component: EstablishmentCertificationTypeComponent;
   let fixture: ComponentFixture<EstablishmentCertificationTypeComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [EstablishmentCertificationTypeComponent]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(EstablishmentCertificationTypeComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});