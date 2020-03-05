import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CapacityTypeComponent } from './capacitytype.component';

describe('CapacityTypeComponent', () => {
   let component: CapacityTypeComponent;
   let fixture: ComponentFixture<CapacityTypeComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [CapacityTypeComponent]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(CapacityTypeComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});