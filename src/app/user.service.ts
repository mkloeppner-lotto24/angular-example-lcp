import { Injectable } from '@angular/core';
import { Observable, interval, of, switchMap } from 'rxjs';

export type User = {
  id: number,
  profileIcon: string;
}

const martin: User = {
  id: 1,
  profileIcon: 'https://media.licdn.com/dms/image/C4D03AQFj2D9iDa7oJA/profile-displayphoto-shrink_400_400/0/1516997069619?e=1699488000&v=beta&t=1Rev1nSyFTTO8tvdhjTyBo532QrRt9Cb7yT4Q_Z7rnA'
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users$: Observable<User[]> = interval(4000).pipe(switchMap(() => of([martin])));

}
