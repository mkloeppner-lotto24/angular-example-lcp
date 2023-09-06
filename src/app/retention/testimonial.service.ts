import { Injectable, inject } from '@angular/core';
import { Observable, interval, of, switchMap, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';


export type Testimonial = {
  name: string,
  quote: number,
  userId: number
}

@Injectable({
  providedIn: 'root',
})
export class TestimonialService {

  private httpClient = inject(HttpClient);

  // State
  public get testimonial$(): Observable<Testimonial[]> {
    return this.httpClient.get<Testimonial[]>('/testimonials');
  }

  constructor() { }
}
