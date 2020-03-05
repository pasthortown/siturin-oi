import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DeclarationItemComponent } from './declarationitem.component';

describe('DeclarationItemComponent', () => {
   let component: DeclarationItemComponent;
   let fixture: ComponentFixture<DeclarationItemComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [DeclarationItemComponent]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(DeclarationItemComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});