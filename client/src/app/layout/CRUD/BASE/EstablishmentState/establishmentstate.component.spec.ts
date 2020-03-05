import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EstablishmentStateComponent } from './establishmentstate.component';

describe('EstablishmentStateComponent', () => {
   let component: EstablishmentStateComponent;
   let fixture: ComponentFixture<EstablishmentStateComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [EstablishmentStateComponent]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(EstablishmentStateComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});