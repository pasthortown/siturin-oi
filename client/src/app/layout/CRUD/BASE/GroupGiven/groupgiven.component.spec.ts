import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GroupGivenComponent } from './groupgiven.component';

describe('GroupGivenComponent', () => {
   let component: GroupGivenComponent;
   let fixture: ComponentFixture<GroupGivenComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [GroupGivenComponent]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(GroupGivenComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});