import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PersistanceService } from 'src/app/shared/PersistanseService';
import { IEmployee } from 'src/app/store/content/types/employees/Employee.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class EmployeesService {
  constructor(
    private httpClient: HttpClient,
    private persistanceService: PersistanceService
  ) {}

  getAll(): Observable<IEmployee[]> {
    const url = environment.baseUrl + '/api/employees/findall';
    const token = this.persistanceService.get('accessToken');
    const headers = new HttpHeaders().set('Authorization', token);

    return this.httpClient
      .get<IEmployee[]>(url, { headers })
      .pipe(map((response: IEmployee[]) => response));
  }

  getById(id: number): Observable<IEmployee> {
    const url = environment.baseUrl + '/api/employees/findbyid/' + id;
    const token = this.persistanceService.get('accessToken');
    const headers = new HttpHeaders().set('Authorization', token);

    return this.httpClient
      .get<IEmployee>(url, { headers })
      .pipe(map((response: IEmployee) => response));
  }

  create(employee: IEmployee): Observable<IEmployee> {
    const url = environment.baseUrl + '/api/employees/create';
    const token = this.persistanceService.get('accessToken');
    const headers = new HttpHeaders().set('Authorization', token);

    return this.httpClient
      .post<IEmployee>(
        url,
        {
          fullName: employee.fullName,
          address: employee.address,
          beginWorking: employee.beginWorking,
          idPosition: employee.positionId,
        },
        { headers }
      )
      .pipe(map((response: IEmployee) => response));
  }

  update(employee: IEmployee): Observable<IEmployee> {
    const url = environment.baseUrl + '/api/employees/update';
    const token = this.persistanceService.get('accessToken');
    const headers = new HttpHeaders().set('Authorization', token);

    return this.httpClient
      .post<IEmployee>(
        url,
        {
          id: employee.id,
          fullName: employee.fullName,
          address: employee.address,
          beginWorking: employee.beginWorking,
          idPosition: employee.positionId,
        },
        { headers }
      )
      .pipe(map((response: IEmployee) => response));
  }

  delete(id: number): Observable<boolean> {
    const url = environment.baseUrl + '/api/employees/delete/' + id;
    const token = this.persistanceService.get('accessToken');
    const headers = new HttpHeaders().set('Authorization', token);

    return this.httpClient
      .delete<boolean>(url, { headers })
      .pipe(map((deleted: boolean) => deleted));
  }
}
