import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ReplaySubject, take } from 'rxjs';

export type User = {
  id: number,
  profileIcon: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private httpClient = inject(HttpClient);

  private _users$ = new ReplaySubject<User[]>(1)
  public users$ = this._users$.asObservable();

  constructor() {
    this._users$.next([{ id: 1, profileIcon: '' }]);

    this.httpClient.get<User[]>('/users').pipe(take(1)).subscribe(this._users$);
  }

}
