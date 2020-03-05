import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ComplementaryServiceTypeComponent } from './complementaryservicetype.component';

describe('ComplementaryServiceTypeComponent', () => {
   let component: ComplementaryServiceTypeComponent;
   let fixture: ComponentFixture<ComplementaryServiceTypeComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ComplementaryServiceTypeComponent]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(ComplementaryServiceTypeComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});