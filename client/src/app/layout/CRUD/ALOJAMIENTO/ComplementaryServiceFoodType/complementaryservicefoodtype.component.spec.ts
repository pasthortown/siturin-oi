import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ComplementaryServiceFoodTypeComponent } from './complementaryservicefoodtype.component';

describe('ComplementaryServiceFoodTypeComponent', () => {
   let component: ComplementaryServiceFoodTypeComponent;
   let fixture: ComponentFixture<ComplementaryServiceFoodTypeComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ComplementaryServiceFoodTypeComponent]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(ComplementaryServiceFoodTypeComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});