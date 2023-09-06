import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EMPTY, Observable, combineLatest, defaultIfEmpty, delay, interval, map, merge, mergeAll, of, switchMap, take } from 'rxjs';
import { TestimonialService } from '../retention/testimonial.service';
import { UserService } from '../customer/user.service';
import { QuotesService } from '../quotes/quotes.service';

export type TestimonialViewModel = {
  name: string,
  quote: string,
  profileIcon: string
}

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule],
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
    this.quoteService.quotes$]).pipe(switchMap(([testimonial, users, quotes]) => {
      const user = users.find((user) => user.id === testimonial.userId);
      if (!user) return EMPTY;

      const userQuotes = quotes.filter((q) => q.userId === user.id );
      if (userQuotes.length - 1 < testimonial.quote) return EMPTY;

      return of({
        name: testimonial.name,
        quote: quotes[testimonial.quote].quote,
        profileIcon: user.profileIcon,
      });
    }));

}
