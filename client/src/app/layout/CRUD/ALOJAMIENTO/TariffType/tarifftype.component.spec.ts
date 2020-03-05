import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TariffTypeComponent } from './tarifftype.component';

describe('TariffTypeComponent', () => {
   let component: TariffTypeComponent;
   let fixture: ComponentFixture<TariffTypeComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [TariffTypeComponent]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(TariffTypeComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});