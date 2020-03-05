import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EstablishmentPropertyTypeComponent } from './establishmentpropertytype.component';

describe('EstablishmentPropertyTypeComponent', () => {
   let component: EstablishmentPropertyTypeComponent;
   let fixture: ComponentFixture<EstablishmentPropertyTypeComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [EstablishmentPropertyTypeComponent]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(EstablishmentPropertyTypeComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});