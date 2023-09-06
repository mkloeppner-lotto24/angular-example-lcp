import { Observable, Subscriber } from "rxjs";

export function wait(millis: number): Observable<void> {
    const subscribers: Subscriber<void>[] = [];
    const timeout = setTimeout(() => {
        for (const sub of subscribers) {
            sub.next();
            sub.complete();
        }
    }, millis);
    return new Observable((subscriber) => {
        subscriber.next();
        subscribers.push(subscriber);
    });
}