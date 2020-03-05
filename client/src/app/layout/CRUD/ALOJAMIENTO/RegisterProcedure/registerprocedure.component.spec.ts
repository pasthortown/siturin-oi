import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterProcedureComponent } from './registerprocedure.component';

describe('RegisterProcedureComponent', () => {
   let component: RegisterProcedureComponent;
   let fixture: ComponentFixture<RegisterProcedureComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [RegisterProcedureComponent]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(RegisterProcedureComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});