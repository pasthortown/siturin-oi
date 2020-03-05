import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterRequisiteComponent } from './registerrequisite.component';

describe('RegisterRequisiteComponent', () => {
   let component: RegisterRequisiteComponent;
   let fixture: ComponentFixture<RegisterRequisiteComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [RegisterRequisiteComponent]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(RegisterRequisiteComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});