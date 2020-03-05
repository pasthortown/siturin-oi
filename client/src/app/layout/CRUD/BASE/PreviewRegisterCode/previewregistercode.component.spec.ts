import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PreviewRegisterCodeComponent } from './previewregistercode.component';

describe('PreviewRegisterCodeComponent', () => {
   let component: PreviewRegisterCodeComponent;
   let fixture: ComponentFixture<PreviewRegisterCodeComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [PreviewRegisterCodeComponent]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(PreviewRegisterCodeComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   it('should create', () => {
      expect(component).toBeTruthy();
   });
});