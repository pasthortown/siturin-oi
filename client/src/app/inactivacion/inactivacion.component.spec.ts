import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InactivacionComponent } from './inactivacion.component';

describe('InactivacionComponent', () => {
    let component: InactivacionComponent;
    let fixture: ComponentFixture<InactivacionComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [InactivacionComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InactivacionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
