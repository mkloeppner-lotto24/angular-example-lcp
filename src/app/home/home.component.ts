import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialComponent } from '../testimonial/testimonial.component';
import { TestimonialBatteryComponent } from '../testimonial-battery/testimonial-battery.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TestimonialComponent, TestimonialBatteryComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
