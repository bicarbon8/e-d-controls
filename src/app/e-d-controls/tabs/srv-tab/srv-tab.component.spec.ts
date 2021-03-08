import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrvTabComponent } from './srv-tab.component';

describe('SrvTabComponent', () => {
  let component: SrvTabComponent;
  let fixture: ComponentFixture<SrvTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SrvTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SrvTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
