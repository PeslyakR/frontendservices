import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PersistanceService } from 'src/app/shared/PersistanseService';
import { IRequest } from 'src/app/store/content/types/requests/Request.interface';
import { environment } from 'src/environments/environment';
import { IConfirmRequest } from '../store/content/types/requests/ConfirmRequest.interface';

@Injectable()
export class RequestsService {
  constructor(
    private httpClient: HttpClient,
    private persistanceService: PersistanceService
  ) {}

  getAllById(id: number): Observable<IRequest[]> {
    const url = environment.baseUrl + '/api/requests/findbyid/' + id;

    const token = this.persistanceService.get('accessToken');
    const headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.get<IRequest[]>(url, { headers }).pipe(
      map((response: IRequest[]) => {
        return response;
      })
    );
  }

  getAllForConfirming(idEmp: number): Observable<IRequest[]> {
    const url =
      environment.baseUrl +
      '/api/requests/findRequestsForConsideration/' +
      idEmp;

    const token = this.persistanceService.get('accessToken');
    const headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.get<IRequest[]>(url, { headers }).pipe(
      map((response: IRequest[]) => {
        return response;
      })
    );
  }

  getById(id: number): Observable<IRequest> {
    const url = environment.baseUrl + '/api/requests/find/' + id;

    const token = this.persistanceService.get('accessToken');
    const headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.get<IRequest>(url, { headers }).pipe(
      map((response: IRequest) => {
        return response;
      })
    );
  }

  createReq(request: IRequest): Observable<IRequest> {
    const url = environment.baseUrl + '/api/requests/create';

    const token = this.persistanceService.get('accessToken');
    const headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient
      .post<IRequest>(
        url,
        {
          header: request.header,
          body: request.body,
          idAuthor: request.idAuthor,
          idService: request.idService,
        },
        { headers }
      )
      .pipe(
        map((response: IRequest) => {
          return response;
        })
      );
  }

  update(request: IRequest): Observable<IRequest> {
    const url = environment.baseUrl + '/api/requests/update';

    const token = this.persistanceService.get('accessToken');
    const headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient
      .post<IRequest>(
        url,
        {
          id: request.id,
          header: request.header,
          body: request.body,
          idAuthor: request.idAuthor,
          idService: request.idService,
        },
        { headers }
      )
      .pipe(
        map((response: IRequest) => {
          return response;
        })
      );
  }

  delete(id: number): Observable<boolean> {
    const url = environment.baseUrl + '/api/requests/delete/' + id;

    const token = this.persistanceService.get('accessToken');
    const headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.delete<boolean>(url, { headers }).pipe(
      map((response: boolean) => {
        return response;
      })
    );
  }

  confirmRequest(confirmRequest: IConfirmRequest): Observable<IRequest> {
    const url = environment.baseUrl + '/api/requests/confirmrequest';

    const token = this.persistanceService.get('accessToken');
    const headers = new HttpHeaders().set('Authorization', token);

    return this.httpClient
      .put<IRequest>(
        url,
        {
          idReq: confirmRequest.idReq,
          idAuthor: confirmRequest.idAuthor,
          comment: confirmRequest.comment,
          request: confirmRequest.request,
          idRoles: confirmRequest.idRoles,
        },
        { headers }
      )
      .pipe(
        map((response: IRequest) => {
          return response;
        })
      );
  }
}
