import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PersistanceService } from '../shared/PersistanseService';
import { IUser } from '../store/content/types/users/User.interface';

@Injectable()
export class UsersService {
  constructor(
    private httpClient: HttpClient,
    private persistanceService: PersistanceService
  ) {}

  getById(id: number): Observable<IUser> {
    const url = environment.baseUrl + '/api/users/finduserbyid/' + id;
    const token = this.persistanceService.get('accessToken');
    const headers = new HttpHeaders().set('Authorization', token);

    return this.httpClient
      .get<IUser>(url, { headers })
      .pipe(map((response: IUser) => response));
  }
  create(user: IUser): Observable<IUser> {
    const url = environment.baseUrl + '/api/users/register';
    const token = this.persistanceService.get('accessToken');
    const headers = new HttpHeaders().set('Authorization', token);
    console.log('----> user', user);

    return this.httpClient
      .post<IUser>(
        url,
        {
          username: user.username,
          password: user.password,
          idEmployee: user.idEmployee,
        },
        { headers }
      )
      .pipe(map((response: IUser) => response));
  }

  update(user: IUser): Observable<IUser> {
    const url = environment.baseUrl + '/api/users/update';
    const token = this.persistanceService.get('accessToken');
    const headers = new HttpHeaders().set('Authorization', token);

    return this.httpClient
      .post<IUser>(
        url,
        { id: user.id, username: user.username, password: user.password },
        { headers }
      )
      .pipe(map((response: IUser) => response));
  }

  delete(id: number): Observable<boolean> {
    const url = environment.baseUrl + '/api/users/delete/' + id;
    const token = this.persistanceService.get('accessToken');
    const headers = new HttpHeaders().set('Authorization', token);
    console.log('id ', id, 'yol ', url);

    return this.httpClient
      .delete<boolean>(url, { headers })
      .pipe(map((response: boolean) => response));
  }
}
