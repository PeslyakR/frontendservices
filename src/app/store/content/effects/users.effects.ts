import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsersService } from 'src/app/services/users.service';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, map, of, switchMap } from 'rxjs';
import {
  createUserAction,
  deleteUserAction,
  deleteUserActionSuccess,
  findUserAction,
  getUserActionSuccess,
  updateUserAction,
} from '../actions/users.action';
import { IUser } from '../types/users/User.interface';
import {
  getBackendErrors,
  releaseBackendErrors,
} from '../actions/errors.action';
import { Store } from '@ngrx/store';

@Injectable()
export class UsersEffect {
  constructor(
    private actions$: Actions,
    private userServers: UsersService,
    private store: Store
  ) {}

  getByIdUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(findUserAction),
      switchMap(({ id }) => {
        return this.userServers.getById(id).pipe(
          map((user: IUser) => {
            this.store.dispatch(releaseBackendErrors());
            return getUserActionSuccess({ user });
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
      ofType(createUserAction),
      switchMap(({ user }) => {
        return this.userServers.create(user).pipe(
          map((user: IUser) => {
            this.store.dispatch(releaseBackendErrors());
            return getUserActionSuccess({ user });
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
      ofType(updateUserAction),
      switchMap(({ user }) => {
        return this.userServers.update(user).pipe(
          map((user: IUser) => {
            this.store.dispatch(releaseBackendErrors());
            return getUserActionSuccess({ user });
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
      ofType(deleteUserAction),
      switchMap(({ id }) => {
        return this.userServers.delete(id).pipe(
          map((deleted: boolean) => {
            this.store.dispatch(releaseBackendErrors());
            return deleteUserActionSuccess({ deleted });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getBackendErrors({ errors: errorResponse.error.errors }));
          })
        );
      })
    )
  );
}
