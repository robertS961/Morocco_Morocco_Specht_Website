import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonePopUpComponent } from './phone-pop-up.component';

describe('PhonePopUpComponent', () => {
  let component: PhonePopUpComponent;
  let fixture: ComponentFixture<PhonePopUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhonePopUpComponent]
    });
    fixture = TestBed.createComponent(PhonePopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
