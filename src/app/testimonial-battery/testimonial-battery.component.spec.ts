import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialBatteryComponent } from './testimonial-battery.component';

describe('TestimonialBatteryComponent', () => {
  let component: TestimonialBatteryComponent;
  let fixture: ComponentFixture<TestimonialBatteryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestimonialBatteryComponent]
    });
    fixture = TestBed.createComponent(TestimonialBatteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
