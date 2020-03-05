import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DeclarationItemValueComponent } from './declarationitemvalue.component';

describe('DeclarationItemValueComponent', () => {
   let component: DeclarationItemValueComponent;
   let fixture: ComponentFixture<DeclarationItemValueComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [DeclarationItemValueComponent]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(DeclarationItemValueComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});