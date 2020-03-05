import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReceptionRoomComponent } from './receptionroom.component';

describe('ReceptionRoomComponent', () => {
   let component: ReceptionRoomComponent;
   let fixture: ComponentFixture<ReceptionRoomComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [ReceptionRoomComponent]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(ReceptionRoomComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});