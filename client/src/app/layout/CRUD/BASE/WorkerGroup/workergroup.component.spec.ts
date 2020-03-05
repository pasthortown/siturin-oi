import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkerGroupComponent } from './workergroup.component';

describe('WorkerGroupComponent', () => {
   let component: WorkerGroupComponent;
   let fixture: ComponentFixture<WorkerGroupComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [WorkerGroupComponent]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(WorkerGroupComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});