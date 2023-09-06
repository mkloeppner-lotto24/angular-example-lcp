import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, merge, of } from 'rxjs';


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
        return merge(of<Quote[]>([{ userId: 1, quote: 'we are loading the quote. Please wait... awe are loading the quote. Please wait... awe are loading the quote. Please wait... aaaaaå' }]), this.httpClient.get<Quote[]>('/quotes'));
    }
}
