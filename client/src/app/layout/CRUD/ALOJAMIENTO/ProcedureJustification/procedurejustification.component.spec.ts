import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProcedureJustificationComponent } from './procedurejustification.component';

describe('ProcedureJustificationComponent', () => {
   let component: ProcedureJustificationComponent;
   let fixture: ComponentFixture<ProcedureJustificationComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ProcedureJustificationComponent]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(ProcedureJustificationComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});