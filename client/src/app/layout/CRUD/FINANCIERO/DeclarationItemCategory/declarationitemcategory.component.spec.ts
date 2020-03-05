import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DeclarationItemCategoryComponent } from './declarationitemcategory.component';

describe('DeclarationItemCategoryComponent', () => {
   let component: DeclarationItemCategoryComponent;
   let fixture: ComponentFixture<DeclarationItemCategoryComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [DeclarationItemCategoryComponent]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(DeclarationItemCategoryComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});