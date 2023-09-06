import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ReplaySubject, take } from 'rxjs';

export type Quote = {
    userId: number,
    quote: string,
}

@Injectable({
    providedIn: 'root',
})
export class QuotesService {

    private httpClient = inject(HttpClient);

    private _quotes$ = new ReplaySubject<Quote[]>();
    public quotes$ = this._quotes$.asObservable();

    constructor() {
        this.httpClient.get<Quote[]>('/quotes').pipe(take(1)).subscribe(this._quotes$);
    }
}
