import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';


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
}
