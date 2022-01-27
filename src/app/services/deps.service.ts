import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PersistanceService } from 'src/app/shared/PersistanseService';
import { IDepartment } from 'src/app/store/content/types/departments/Department.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class DepsService {
  constructor(
    private httpClient: HttpClient,
    private persistanceService: PersistanceService
  ) {}

  getAll(): Observable<IDepartment[]> {
    const url = environment.baseUrl + '/api/departments/findall';
    const token = this.persistanceService.get('accessToken');
    const headers = new HttpHeaders().set('Authorization', token);

    return this.httpClient.get<IDepartment[]>(url, { headers: headers }).pipe(
      map((response: IDepartment[]) => {
        return response;
      })
    );
  }

  getById(id: number): Observable<IDepartment> {
    const token = this.persistanceService.get('accessToken');
    const headers = new HttpHeaders().set('Authorization', token);
    const url = environment.baseUrl + '/api/departments/find/' + id;

    return this.httpClient.get<IDepartment>(url, { headers: headers }).pipe(
      map((response: IDepartment) => {
        return response;
      })
    );
  }

  create(department: IDepartment): Observable<IDepartment> {
    const token = this.persistanceService.get('accessToken');

    const headers = new HttpHeaders().set('Authorization', token);
    const url = environment.baseUrl + '/api/departments/create';

    return this.httpClient
      .post<IDepartment>(
        url,
        { title: department.title, description: department.description },
        { headers: headers }
      )
      .pipe(
        map((response: IDepartment) => {
          return response;
        })
      );
  }

  update(department: IDepartment): Observable<IDepartment> {
    const token = this.persistanceService.get('accessToken');
    const headers = new HttpHeaders().set('Authorization', token);
    const url = environment.baseUrl + '/api/departments/update';

    return this.httpClient
      .post<IDepartment>(
        url,
        {
          id: department.id,
          title: department.title,
          description: department.description,
          updated: department.updated,
        },
        { headers: headers }
      )
      .pipe(
        map((response: IDepartment) => {
          return response;
        })
      );
  }

  delete(id: number): Observable<boolean> {
    const token = this.persistanceService.get('accessToken');
    const headers = new HttpHeaders().set('Authorization', token);
    const url = environment.baseUrl + '/api/departments/delete/' + id;

    return this.httpClient.delete<boolean>(url, { headers: headers }).pipe(
      map((response: boolean) => {
        return response;
      })
    );
  }
}
