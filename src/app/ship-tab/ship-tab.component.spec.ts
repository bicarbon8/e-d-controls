import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipTabComponent } from './ship-tab.component';

describe('ShipTabComponent', () => {
  let component: ShipTabComponent;
  let fixture: ComponentFixture<ShipTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
