import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap } from 'rxjs';
import { ServicesService } from 'src/app/services/services.service';
import {
  getBackendErrors,
  releaseBackendErrors,
} from '../actions/errors.action';
import {
  createServiceAction,
  deleteServiceActionSuccess,
  deleteServiceAction,
  findServiceAction,
  findServicesAction,
  getServiceActionSuccess,
  getServicesActionSuccess,
  updateServiceAction,
} from '../actions/services.actions';
import { IService } from '../types/services/Service.interface';

@Injectable()
export class ServicesEffect {
  constructor(
    private actions$: Actions,
    private serviceService: ServicesService,
    private store: Store
  ) {}

  getAllServices$ = createEffect(() =>
    this.actions$.pipe(
      ofType(findServicesAction),
      switchMap(() => {
        return this.serviceService.getAll().pipe(
          map((services: IService[]) => {
            this.store.dispatch(releaseBackendErrors());
            return getServicesActionSuccess({ services });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getBackendErrors({ errors: errorResponse.error.errors }));
          })
        );
      })
    )
  );

  getByIdService$ = createEffect(() =>
    this.actions$.pipe(
      ofType(findServiceAction),
      switchMap(({ id }) => {
        return this.serviceService.getById(id).pipe(
          map((service: IService) => {
            this.store.dispatch(releaseBackendErrors());
            return getServiceActionSuccess({ service });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getBackendErrors({ errors: errorResponse.error.errors }));
          })
        );
      })
    )
  );

  create$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createServiceAction),
      switchMap(({ service }) => {
        return this.serviceService.create(service).pipe(
          map((service: IService) => {
            this.store.dispatch(releaseBackendErrors());
            return getServiceActionSuccess({ service });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getBackendErrors({ errors: errorResponse.error.errors }));
          })
        );
      })
    )
  );

  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateServiceAction),
      switchMap(({ service }) => {
        return this.serviceService.update(service).pipe(
          map((service: IService) => {
            this.store.dispatch(releaseBackendErrors());
            return getServiceActionSuccess({ service });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getBackendErrors({ errors: errorResponse.error.errors }));
          })
        );
      })
    )
  );

  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteServiceAction),
      switchMap(({ id }) => {
        return this.serviceService.delete(id).pipe(
          map((deleted: boolean) => {
            this.store.dispatch(releaseBackendErrors());
            return deleteServiceActionSuccess({ deleted });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getBackendErrors({ errors: errorResponse.error.errors }));
          })
        );
      })
    )
  );
}
