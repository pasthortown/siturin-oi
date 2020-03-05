import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { KitchenTypeComponent } from './kitchentype.component';

describe('KitchenTypeComponent', () => {
   let component: KitchenTypeComponent;
   let fixture: ComponentFixture<KitchenTypeComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [KitchenTypeComponent]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(KitchenTypeComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});