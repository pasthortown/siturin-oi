import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FoodDrinkAttachmentComponent } from './fooddrinkattachment.component';

describe('FoodDrinkAttachmentComponent', () => {
   let component: FoodDrinkAttachmentComponent;
   let fixture: ComponentFixture<FoodDrinkAttachmentComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [FoodDrinkAttachmentComponent]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(FoodDrinkAttachmentComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});