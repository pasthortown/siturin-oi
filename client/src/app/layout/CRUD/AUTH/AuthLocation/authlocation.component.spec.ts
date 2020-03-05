import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthLocationComponent } from './authlocation.component';

describe('AuthLocationComponent', () => {
   let component: AuthLocationComponent;
   let fixture: ComponentFixture<AuthLocationComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [AuthLocationComponent]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(AuthLocationComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});