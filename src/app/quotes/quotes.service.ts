import { Injectable, inject } from '@angular/core';
import { Observable, interval, of, switchMap, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';


export type Quote = {
    userId: number,
    quote: string,
}

@Injectable({
    providedIn: 'root',
})
export class QuotesService {

    private httpClient = inject(HttpClient);
    
    public get quotes$(): Observable<Quote[]> {
        return this.httpClient.get<Quote[]>('/quotes');
    }

    constructor() { }
}
