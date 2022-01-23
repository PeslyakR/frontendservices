import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PersistanceService } from 'src/app/shared/PersistanseService';
import { IPosition } from 'src/app/store/content/types/positions/Position.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class PositionsService {
  constructor(
    private httpClient: HttpClient,
    private persistanceService: PersistanceService
  ) {}

  getAll(idDep: number): Observable<IPosition[]> {
    const url =
      environment.baseUrl + '/api/positions/findbydepartamentid/' + idDep;
    const token = this.persistanceService.get('accessToken');
    const headers = new HttpHeaders().set('Authorization', token);

    return this.httpClient
      .get<IPosition[]>(url, { headers })
      .pipe(map((response: IPosition[]) => response));
  }

  getById(id: number): Observable<IPosition> {
    const url = environment.baseUrl + '/api/positions/find/' + id;
    const token = this.persistanceService.get('accessToken');
    const headers = new HttpHeaders().set('Authorization', token);

    return this.httpClient
      .get<IPosition>(url, { headers })
      .pipe(map((response: IPosition) => response));
  }

  create(position: IPosition): Observable<IPosition> {
    const url = environment.baseUrl + '/api/positions/create';
    const token = this.persistanceService.get('accessToken');
    const headers = new HttpHeaders().set('Authorization', token);

    return this.httpClient
      .post<IPosition>(
        url,
        {
          title: position.title,
          description: position.description,
          idDepartament: position.idDep,
        },
        { headers }
      )
      .pipe(map((response: IPosition) => response));
  }

  update(position: IPosition): Observable<IPosition> {
    const url = environment.baseUrl + '/api/positions/update';
    const token = this.persistanceService.get('accessToken');
    const headers = new HttpHeaders().set('Authorization', token);
    console.log('update position ', position);

    return this.httpClient
      .post<IPosition>(
        url,
        {
          title: position.title,
          description: position.description,
          id: position.id,
          updated: position.updated,
        },
        { headers }
      )
      .pipe(map((response: IPosition) => response));
  }

  delete(id: number): Observable<boolean> {
    console.log('delete position ', id);

    const url = environment.baseUrl + '/api/positions/delete/' + id;
    const token = this.persistanceService.get('accessToken');
    const headers = new HttpHeaders().set('Authorization', token);

    return this.httpClient
      .delete<boolean>(url, { headers })
      .pipe(map((response: boolean) => response));
  }
}
