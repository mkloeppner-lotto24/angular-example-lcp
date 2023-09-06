import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { wait } from '../utils/wait';
import { Observable, defaultIfEmpty, delay, interval, merge, mergeAll, of, switchMap, take } from 'rxjs';

export type Testimonial = {
  name: string,
  quote: string,
  profileIcon: string
}

export const defaultTestimonial: Testimonial = {
  name: `---`,
  quote: `Loading please wait. Loading please wait. Loading please wait.`,
  profileIcon: ``
};

export const testimonial: Testimonial = {
  name: `Martin Klöppner`,
  quote: `Endless seeking for perfection will bring you nowhere.
   Just go the next better step and you arrive further.`,
  profileIcon: `https://media.licdn.com/dms/image/C4D03AQFj2D9iDa7oJA/profile-displayphoto-shrink_400_400/0/1516997069619?e=1699488000&v=beta&t=1Rev1nSyFTTO8tvdhjTyBo532QrRt9Cb7yT4Q_Z7rnA`
};

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent {
  public testimonial$: Observable<Testimonial> =
      interval(2000).pipe(take(1), switchMap(() => of(testimonial)))
}
