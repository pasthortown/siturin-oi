import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterTypeImageComponent } from './registertypeimage.component';

describe('RegisterTypeImageComponent', () => {
   let component: RegisterTypeImageComponent;
   let fixture: ComponentFixture<RegisterTypeImageComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [RegisterTypeImageComponent]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(RegisterTypeImageComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});