import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, merge, of } from 'rxjs';


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

  public get testimonial$(): Observable<Testimonial[]> {
    return merge(of([
      { name: 'A random person', quote: 0, userId: 1 },
      { name: 'Another random', quote: 0, userId: 1 },
      { name: 'Oh a person', quote: 0, userId: 1 }]),
      this.httpClient.get<Testimonial[]>('/testimonials'));
  }
}
