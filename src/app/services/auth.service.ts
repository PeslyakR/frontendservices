import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ILoginData } from '../store/auth/types/LoginData.interface';
import { map, Observable } from 'rxjs';
import { ICurrentUser } from 'src/app/store/auth/types/CurrentUser.interface';

@Injectable()
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  private url = environment.baseUrl + '/api/login';

  login(authdata: ILoginData): Observable<ICurrentUser> {
    let body = new URLSearchParams();
    body.set('username', authdata.username);
    body.set('password', authdata.password);
    return this.httpClient
      .post<ICurrentUser>(this.url, body.toString(), {
        headers: new HttpHeaders().set(
          'Content-Type',
          'application/x-www-form-urlencoded'
        ),
      })
      .pipe(
        map((response: ICurrentUser) => {
          return response;
        })
      );
  }
}
