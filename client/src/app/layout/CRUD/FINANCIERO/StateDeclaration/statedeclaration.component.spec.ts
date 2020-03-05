import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StateDeclarationComponent } from './statedeclaration.component';

describe('StateDeclarationComponent', () => {
   let component: StateDeclarationComponent;
   let fixture: ComponentFixture<StateDeclarationComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [StateDeclarationComponent]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(StateDeclarationComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});