import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PersistanceService } from 'src/app/shared/PersistanseService';
import { IRole } from 'src/app/store/content/types/roles/Role.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class RolesService {
  constructor(
    private httpClient: HttpClient,
    private persistanceService: PersistanceService
  ) {}

  getAll(idService: number): Observable<IRole[]> {
    const url = environment.baseUrl + '/api/roles/findbyserviceid/' + idService;
    const token = this.persistanceService.get('accessToken');
    const headers = new HttpHeaders().set('Authorization', token);

    return this.httpClient
      .get<IRole[]>(url, { headers })
      .pipe(map((response: IRole[]) => response));
  }

  getById(id: number): Observable<IRole> {
    const url = environment.baseUrl + '/api/roles/find/' + id;
    const token = this.persistanceService.get('accessToken');
    const headers = new HttpHeaders().set('Authorization', token);

    return this.httpClient
      .get<IRole>(url, { headers })
      .pipe(map((response: IRole) => response));
  }

  create(role: IRole): Observable<IRole> {
    const url = environment.baseUrl + '/api/roles/create';
    const token = this.persistanceService.get('accessToken');
    const headers = new HttpHeaders().set('Authorization', token);

    return this.httpClient
      .post<IRole>(
        url,
        {
          title: role.title,
          description: role.description,
          serviceId: role.serviceId,
          name: role.name,
          updated: role.updated,
        },
        { headers }
      )
      .pipe(map((response: IRole) => response));
  }

  update(role: IRole): Observable<IRole> {
    const url = environment.baseUrl + '/api/roles/update';
    const token = this.persistanceService.get('accessToken');
    const headers = new HttpHeaders().set('Authorization', token);

    return this.httpClient
      .post<IRole>(
        url,
        {
          title: role.title,
          description: role.description,
          id: role.id,
          name: role.name,
        },
        { headers }
      )
      .pipe(map((response: IRole) => response));
  }

  delete(id: number): Observable<boolean> {
    const url = environment.baseUrl + '/api/roles/delete/' + id;
    const token = this.persistanceService.get('accessToken');
    const headers = new HttpHeaders().set('Authorization', token);

    return this.httpClient
      .delete<boolean>(url, { headers })
      .pipe(map((response: boolean) => response));
  }
}
