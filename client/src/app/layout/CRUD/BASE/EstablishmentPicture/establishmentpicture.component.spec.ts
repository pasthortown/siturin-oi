import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EstablishmentPictureComponent } from './establishmentpicture.component';

describe('EstablishmentPictureComponent', () => {
   let component: EstablishmentPictureComponent;
   let fixture: ComponentFixture<EstablishmentPictureComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [EstablishmentPictureComponent]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(EstablishmentPictureComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});