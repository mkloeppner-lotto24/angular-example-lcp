import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, interval, of, switchMap } from 'rxjs';

export type User = {
  id: number,
  profileIcon: string;
}


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private httpClient = inject(HttpClient);

  // State
  public get users$(): Observable<User[]> {
    return this.httpClient.get<User[]>('/users');
  }

}
