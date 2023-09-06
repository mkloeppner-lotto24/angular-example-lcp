import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Imports, ImportsOrchestratorDirective, importStandalone } from '@lotto24-angular/imports-orchestrator'

@Imports({
  testimonial: importStandalone(() => import('./testimonial/testimonial.component')),
  text: importStandalone(() => import('./home/text/text.component')),
  battery: importStandalone(() => import('./testimonial-battery/testimonial-battery.component')),
})
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-example-lcp';

  private observer: PerformanceObserver;

  constructor() {
    this.observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1]; // Use the latest LCP candidate
      console.log("LCP:", lastEntry.startTime);
      console.log(lastEntry);
    });
    this.observer.observe({ type: "largest-contentful-paint", buffered: true });

    this.observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1]; // Use the latest LCP candidate
      console.log("CLS:", lastEntry.startTime);
      console.log(lastEntry);
    });
    this.observer.observe({ type: "layout-shift", buffered: true });
  }
}
