import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EMPTY, Observable, combineLatest, delay, of, switchMap } from 'rxjs';
import { TestimonialService } from '../retention/testimonial.service';
import { UserService } from '../customer/user.service';
import { QuotesService } from '../quotes/quotes.service';
import { getRandomArbitrary } from '../utils/random';
import { TestimonialUiComponent } from '../components/testimonial-ui/testimonial-ui.component';

export type TestimonialViewModel = {
  name: string,
  quote: string,
  profileIcon: string
}

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule, TestimonialUiComponent],
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent {

  private testimonialService = inject(TestimonialService);
  private userService = inject(UserService);
  private quoteService = inject(QuotesService);

  // Computed state
  public testimonial$: Observable<TestimonialViewModel> = combineLatest([
    this.testimonialService.testimonial$,
    this.userService.users$,
    this.quoteService.quotes$]).pipe(switchMap(([testimonials, users, quotes]) => {
      const testimonial = testimonials[getRandomArbitrary(1,2)];

      const user = users.find((user) => user.id === testimonial.userId);
      if (!user) return EMPTY;

      const userQuotes = quotes.filter((q) => q.userId === user.id );
      if (userQuotes.length - 1 < testimonial.quote) return EMPTY;

      return of({
        name: testimonial.name,
        quote: userQuotes[testimonial.quote].quote,
        profileIcon: user.profileIcon,
      });
    }));

}
