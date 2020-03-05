import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterStateComponent } from './registerstate.component';

describe('RegisterStateComponent', () => {
   let component: RegisterStateComponent;
   let fixture: ComponentFixture<RegisterStateComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [RegisterStateComponent]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(RegisterStateComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});