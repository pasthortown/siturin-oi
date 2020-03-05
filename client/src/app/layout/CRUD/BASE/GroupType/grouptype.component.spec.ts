import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GroupTypeComponent } from './grouptype.component';

describe('GroupTypeComponent', () => {
   let component: GroupTypeComponent;
   let fixture: ComponentFixture<GroupTypeComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [GroupTypeComponent]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(GroupTypeComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});