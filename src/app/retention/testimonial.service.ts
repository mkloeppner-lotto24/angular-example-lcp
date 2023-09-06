import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ReplaySubject, take } from 'rxjs';

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

  private _testimonial$ = new ReplaySubject<Testimonial[]>(1);
  public testimonial$ = this._testimonial$.asObservable();

  constructor() {
    this.httpClient.get<Testimonial[]>('/testimonials').pipe(take(1)).subscribe(this._testimonial$);
  }

}
