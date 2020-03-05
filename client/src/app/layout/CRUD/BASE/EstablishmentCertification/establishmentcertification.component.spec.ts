import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EstablishmentCertificationComponent } from './establishmentcertification.component';

describe('EstablishmentCertificationComponent', () => {
   let component: EstablishmentCertificationComponent;
   let fixture: ComponentFixture<EstablishmentCertificationComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [EstablishmentCertificationComponent]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(EstablishmentCertificationComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});