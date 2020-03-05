import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FloorAuthorizationCertificateComponent } from './floorauthorizationcertificate.component';

describe('FloorAuthorizationCertificateComponent', () => {
   let component: FloorAuthorizationCertificateComponent;
   let fixture: ComponentFixture<FloorAuthorizationCertificateComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [FloorAuthorizationCertificateComponent]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(FloorAuthorizationCertificateComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});