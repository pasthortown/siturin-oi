import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CapacityPictureComponent } from './capacitypicture.component';

describe('CapacityPictureComponent', () => {
   let component: CapacityPictureComponent;
   let fixture: ComponentFixture<CapacityPictureComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [CapacityPictureComponent]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(CapacityPictureComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});