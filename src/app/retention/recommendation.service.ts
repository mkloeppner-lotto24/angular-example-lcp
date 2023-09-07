import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, ReplaySubject, take } from 'rxjs';

export type Recommendation = {
  recommended: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {

  private httpClient = inject(HttpClient);

  private _recommendations$ = new ReplaySubject<Recommendation[]>(1);
  public recommendations$ = this._recommendations$.asObservable();

  constructor() { 
    this._recommendations$.next([]);

    this.httpClient.get<Recommendation[]>('/recommendations').subscribe(this._recommendations$);
  }
}
