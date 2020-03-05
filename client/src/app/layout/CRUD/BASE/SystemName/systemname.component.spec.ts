import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SystemNameComponent } from './systemname.component';

describe('SystemNameComponent', () => {
   let component: SystemNameComponent;
   let fixture: ComponentFixture<SystemNameComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [SystemNameComponent]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(SystemNameComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});