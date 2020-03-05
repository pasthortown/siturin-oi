import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RucNameTypeComponent } from './rucnametype.component';

describe('RucNameTypeComponent', () => {
   let component: RucNameTypeComponent;
   let fixture: ComponentFixture<RucNameTypeComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [RucNameTypeComponent]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(RucNameTypeComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});