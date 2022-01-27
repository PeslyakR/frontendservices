import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PersistanceService } from 'src/app/shared/PersistanseService';
import { IService } from 'src/app/store/content/types/services/Service.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class ServicesService {
  constructor(
    private httpClient: HttpClient,
    private persistanceService: PersistanceService
  ) {}

  getAll(): Observable<IService[]> {
    const url = environment.baseUrl + '/api/services/findall';
    const token = this.persistanceService.get('accessToken');
    const headers = new HttpHeaders().set('Authorization', token);

    return this.httpClient
      .get<IService[]>(url, { headers })
      .pipe(map((response: IService[]) => response));
  }

  getById(id: number): Observable<IService> {
    const url = environment.baseUrl + '/api/services/find/' + id;
    const token = this.persistanceService.get('accessToken');
    const headers = new HttpHeaders().set('Authorization', token);

    return this.httpClient
      .get<IService>(url, { headers })
      .pipe(map((response: IService) => response));
  }

  create(service: IService): Observable<IService> {
    const url = environment.baseUrl + '/api/services/create';
    const token = this.persistanceService.get('accessToken');
    const headers = new HttpHeaders().set('Authorization', token);

    return this.httpClient
      .post<IService>(
        url,
        {
          title: service.title,
          description: service.description,
          updated: service.updated,
        },
        { headers }
      )
      .pipe(map((response: IService) => response));
  }

  update(service: IService): Observable<IService> {
    const url = environment.baseUrl + '/api/services/update';
    const token = this.persistanceService.get('accessToken');
    const headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient
      .post<IService>(
        url,
        {
          id: service.id,
          title: service.title,
          description: service.description,
          updated: service.updated,
        },
        { headers }
      )
      .pipe(map((response: IService) => response));
  }

  delete(id: number): Observable<boolean> {
    const url = environment.baseUrl + '/api/services/delete/' + id;
    const token = this.persistanceService.get('accessToken');
    const headers = new HttpHeaders().set('Authorization', token);

    return this.httpClient
      .delete<boolean>(url, { headers })
      .pipe(map((response: boolean) => response));
  }
}
