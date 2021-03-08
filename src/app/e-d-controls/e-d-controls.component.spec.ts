import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EDControlsComponent } from './e-d-controls.component';

describe('EDControlsComponent', () => {
  let component: EDControlsComponent;
  let fixture: ComponentFixture<EDControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EDControlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EDControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
