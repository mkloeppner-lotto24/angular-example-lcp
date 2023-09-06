import { Injectable, inject } from '@angular/core';
import { Observable, interval, of, switchMap, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';


export type Testimonial = {
  name: string,
  quote: string,
  userId: number
}

export const defaultTestimonial: Testimonial = {
  name: `---`,
  quote: `Loading please wait. Loading please wait. Loading please wait.`,
  userId: 0
};

export const testimonial: Testimonial = {
  name: `Martin Klöppner`,
  quote: `Endless seeking for perfection will bring you nowhere.
   Just go the next better step and you arrive further.`,
  userId: 1
};

@Injectable({
  providedIn: 'root',
})
export class TestimonialService {

  private httpClient = inject(HttpClient);

  // State
  public get testimonial$(): Observable<Testimonial> {
    return this.httpClient.get<Testimonial>('/testimonials');
  }

  constructor() { }
}
