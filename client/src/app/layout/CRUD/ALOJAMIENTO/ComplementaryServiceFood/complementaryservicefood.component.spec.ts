import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ComplementaryServiceFoodComponent } from './complementaryservicefood.component';

describe('ComplementaryServiceFoodComponent', () => {
   let component: ComplementaryServiceFoodComponent;
   let fixture: ComponentFixture<ComplementaryServiceFoodComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ComplementaryServiceFoodComponent]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(ComplementaryServiceFoodComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});