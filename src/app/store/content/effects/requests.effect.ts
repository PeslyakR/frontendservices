import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RequestsService } from 'src/app/services/requests.service';
import {
  findRequestsAction,
  findRequestAction,
  createRequestAction,
  updateRequestAction,
  deleteRequestAction,
  deleteRequestActionSuccess,
  confirmRequestAction,
  getRequestActionSuccess,
  getRequestsActionSuccess,
  findRequestsForConfirmingAction,
} from '../actions/requests.action';
import { IRequest } from '../types/requests/Request.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, map, of, switchMap } from 'rxjs';
import {
  getBackendErrors,
  releaseBackendErrors,
} from '../actions/errors.action';
import { Store } from '@ngrx/store';

@Injectable()
export class RequestsEffect {
  constructor(
    private actions$: Actions,
    private reqService: RequestsService,
    private store: Store
  ) {}

  getAllRequests$ = createEffect(() =>
    this.actions$.pipe(
      ofType(findRequestsAction),
      switchMap(({ id }) => {
        return this.reqService.getAllById(id).pipe(
          map((requests: IRequest[]) => {
            this.store.dispatch(releaseBackendErrors());
            return getRequestsActionSuccess({ requests });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getBackendErrors({ errors: errorResponse.error.errors }));
          })
        );
      })
    )
  );

  getAllRequestsForConfirming$ = createEffect(() =>
    this.actions$.pipe(
      ofType(findRequestsForConfirmingAction),
      switchMap(({ idEmp }) => {
        return this.reqService.getAllForConfirming(idEmp).pipe(
          map((requests: IRequest[]) => {
            this.store.dispatch(releaseBackendErrors());
            return getRequestsActionSuccess({ requests });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getBackendErrors({ errors: errorResponse.error.errors }));
          })
        );
      })
    )
  );

  getRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(findRequestAction),
      switchMap(({ id }) => {
        return this.reqService.getById(id).pipe(
          map((request: IRequest) => {
            this.store.dispatch(releaseBackendErrors());
            return getRequestActionSuccess({ request });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getBackendErrors({ errors: errorResponse.error.errors }));
          })
        );
      })
    )
  );
  reqHeader?: string;
  create$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createRequestAction),
      switchMap(({ request }) => {
        if (this.reqHeader == request.header) {
          return this.reqService.getById(request.id!).pipe(
            map((request: IRequest) => {
              this.store.dispatch(releaseBackendErrors());
              return getRequestActionSuccess({ request });
            }),
            catchError((errorResponse: HttpErrorResponse) => {
              return of(
                getBackendErrors({ errors: errorResponse.error.errors })
              );
            })
          );
        }
        this.reqHeader = request.header;
        return this.reqService.createReq(request).pipe(
          map((request: IRequest) => {
            this.store.dispatch(releaseBackendErrors());
            return getRequestActionSuccess({ request });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getBackendErrors({ errors: errorResponse.error.errors }));
          })
        );
      })
    )
  );

  confirmRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(confirmRequestAction),
      switchMap(({ confirmRequest }) => {
        return this.reqService.confirmRequest(confirmRequest).pipe(
          map((request: IRequest) => {
            this.store.dispatch(releaseBackendErrors());
            return getRequestActionSuccess({ request });
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
      ofType(updateRequestAction),
      switchMap(({ request }) => {
        return this.reqService.update(request).pipe(
          map((request: IRequest) => {
            this.store.dispatch(releaseBackendErrors());
            return getRequestActionSuccess({ request });
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
      ofType(deleteRequestAction),
      switchMap(({ id }) => {
        return this.reqService.delete(id).pipe(
          map((deleted: boolean) => {
            this.store.dispatch(releaseBackendErrors());
            return deleteRequestActionSuccess({ deleted });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getBackendErrors({ errors: errorResponse.error.errors }));
          })
        );
      })
    )
  );
}
