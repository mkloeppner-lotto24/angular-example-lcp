import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialUiComponent } from './testimonial-ui.component';

describe('TestimonialUiComponent', () => {
  let component: TestimonialUiComponent;
  let fixture: ComponentFixture<TestimonialUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestimonialUiComponent]
    });
    fixture = TestBed.createComponent(TestimonialUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
