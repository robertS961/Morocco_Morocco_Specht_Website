import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheFirmComponent } from './the-firm.component';

describe('TheFirmComponent', () => {
  let component: TheFirmComponent;
  let fixture: ComponentFixture<TheFirmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TheFirmComponent]
    });
    fixture = TestBed.createComponent(TheFirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
