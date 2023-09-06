import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, merge, of } from 'rxjs';

export type User = {
  id: number,
  profileIcon: string;
}


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private httpClient = inject(HttpClient);

  public get users$(): Observable<User[]> {
    return merge(of([{ id: 1, profileIcon: '' }]), this.httpClient.get<User[]>('/users'));
  }

}
