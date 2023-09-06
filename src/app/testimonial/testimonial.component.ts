import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EMPTY, Observable, combineLatest, defaultIfEmpty, delay, interval, map, merge, mergeAll, of, switchMap, take } from 'rxjs';
import { TestimonialService } from '../testimonial.service';
import { UserService } from '../user.service';

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

  public testimonial$: Observable<TestimonialViewModel> = combineLatest([
    this.testimonialService.testimonial$,
    this.userService.users$]).pipe(switchMap(([testimonial, users]) => {
      const user = users.find((user) => user.id === testimonial.userId);
      if (!user) return EMPTY;

      return of({
        name: testimonial.name,
        quote: testimonial.quote,
        profileIcon: user.profileIcon,
      });
  }));

}
