import { ChangeDetectionStrategy, Component, Signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EMPTY, Observable, combineLatest, delay, map, of, switchMap, take, takeUntil, takeWhile, tap } from 'rxjs';
import { TestimonialService } from '../retention/testimonial.service';
import { UserService } from '../customer/user.service';
import { QuotesService } from '../quotes/quotes.service';
import { TestimonialUiComponent } from '../components/testimonial-ui/testimonial-ui.component';
import { ImportedComponentReady } from '@lotto24-angular/imports-orchestrator';

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
  styleUrls: ['./testimonial.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialComponent implements ImportedComponentReady {

  private testimonialService = inject(TestimonialService);
  private userService = inject(UserService);
  private quoteService = inject(QuotesService);

  // Computed state
  public testimonial$: Observable<TestimonialViewModel> = combineLatest([
    this.testimonialService.testimonial$,
    this.userService.users$,
    this.quoteService.quotes$]).pipe(switchMap(([testimonials, users, quotes]) => {
      const testimonial = testimonials[1];

      const user = users.find((user) => user.id === testimonial.userId);
      if (!user) return of(EMPTY);

      const userQuotes = quotes.filter((q) => q.userId === user.id );
      if (userQuotes.length - 1 < testimonial.quote)  return of(EMPTY);

      return of({
        name: testimonial.name,
        quote: userQuotes[testimonial.quote].quote,
        profileIcon: user.profileIcon,
      });
    }), tap((t: any) => console.log(t)));

    importedComponentReady(): Promise<void> | Observable<boolean> | Signal<boolean> {
      return this.testimonial$.pipe(delay(2000), map((_) => true));
    }
    

}
