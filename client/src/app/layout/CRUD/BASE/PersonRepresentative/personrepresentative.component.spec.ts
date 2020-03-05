import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonRepresentativeComponent } from './personrepresentative.component';

describe('PersonRepresentativeComponent', () => {
   let component: PersonRepresentativeComponent;
   let fixture: ComponentFixture<PersonRepresentativeComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [PersonRepresentativeComponent]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(PersonRepresentativeComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});