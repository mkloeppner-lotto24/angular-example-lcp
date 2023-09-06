import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialComponent } from '../testimonial/testimonial.component';
import { TestimonialBatteryComponent } from '../testimonial-battery/testimonial-battery.component';
import { TextComponent } from './text/text.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TestimonialComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @ViewChild('text', { read: ViewContainerRef })
  private viewContainerRef!: ViewContainerRef;

  @ViewChild('battery', { read: ViewContainerRef })
  private batteryContainerRef!: ViewContainerRef;

  constructor() {
    setTimeout(() => {
      import('./text/text.component').then((module) => {
        this.viewContainerRef.createComponent(module.TextComponent, { injector: this.viewContainerRef.injector });
      });

      setTimeout(() => {
        import('./../testimonial-battery/testimonial-battery.component').then((module) => {
          this.batteryContainerRef.createComponent(module.TestimonialBatteryComponent, { injector: this.batteryContainerRef.injector });
        });
      }, 1000);
    }, 2000);
  }

}
