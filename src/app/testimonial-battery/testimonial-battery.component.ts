import { Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { EMPTY, Observable, combineLatest, of, switchMap } from 'rxjs';
import { TestimonialService } from '../retention/testimonial.service';
import { UserService } from '../customer/user.service';
import { QuotesService } from '../quotes/quotes.service';
import { TestimonialViewModel } from '../testimonial/testimonial.component';


@Component({
  selector: 'app-testimonial-battery',
  standalone: true,
  imports: [CommonModule, NgFor, AsyncPipe],
  templateUrl: './testimonial-battery.component.html',
  styleUrls: ['./testimonial-battery.component.scss']
})
export class TestimonialBatteryComponent {

  private testimonialService = inject(TestimonialService);
  private userService = inject(UserService);
  private quoteService = inject(QuotesService);

  public testimonials$: Observable<TestimonialViewModel[]> = combineLatest([
    this.testimonialService.testimonial$,
    this.userService.users$,
    this.quoteService.quotes$]).pipe(switchMap(([testimonials, users, quotes]) => {
      const testimonialViewModels: TestimonialViewModel[] = [];
      for (const testimonial of testimonials) {
        const user = users.find((user) => user.id === testimonial.userId);
        if (!user) return EMPTY;

        const userQuotes = quotes.filter((q) => q.userId === user.id);
        if (userQuotes.length - 1 < testimonial.quote) return EMPTY;

        testimonialViewModels.push({
          name: testimonial.name,
          quote: userQuotes[testimonial.quote].quote,
          profileIcon: user.profileIcon,
        });
      }

      return of(testimonialViewModels);
    }));

}
