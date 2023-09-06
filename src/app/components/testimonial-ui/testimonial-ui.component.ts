import { CommonModule } from '@angular/common';
import { Component, Input, WritableSignal, signal } from '@angular/core';
import { TestimonialViewModel } from 'src/app/testimonial/testimonial.component';

@Component({
  selector: 'app-testimonial-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial-ui.component.html',
  styleUrls: ['./testimonial-ui.component.scss']
})
export class TestimonialUiComponent {

  @Input()
  public set name(name: string) {
    this.testimonial.mutate((model) => {
      model.name = name;
    })
  }

  @Input()
  public set quote(quote: string) {
    this.testimonial.mutate((model) => {
      model.quote = quote;
    })
  }

  @Input()
  public set profileIcon(profileIcon: string) {
    this.testimonial.mutate((model) => {
      model.profileIcon = profileIcon;
    })
  }

  protected testimonial: WritableSignal<TestimonialViewModel> = signal<TestimonialViewModel>({
    name: 'Test',
    quote: 'Test',
    profileIcon: 'test'
  });

}
