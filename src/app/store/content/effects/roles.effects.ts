import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap } from 'rxjs';
import { RolesService } from 'src/app/services/roles.service';
import {
  getBackendErrors,
  releaseBackendErrors,
} from '../actions/errors.action';

import {
  createRoleAction,
  deleteRoleAction,
  deleteRoleActionSuccess,
  findRoleAction,
  findRolesAction,
  getRoleActionSuccess,
  getRolesActionSuccess,
  updateRoleAction,
} from '../actions/roles.actions';
import { IRole } from '../types/roles/Role.interface';

@Injectable()
export class RolesEffect {
  constructor(
    private actions$: Actions,
    private rolesService: RolesService,
    private store: Store
  ) {}

  getAllRoles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(findRolesAction),
      switchMap(({ idService }) => {
        return this.rolesService.getAll(idService).pipe(
          map((roles: IRole[]) => {
            this.store.dispatch(releaseBackendErrors());
            return getRolesActionSuccess({ roles });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getBackendErrors({ errors: errorResponse.error.errors }));
          })
        );
      })
    )
  );

  getRolesById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(findRoleAction),
      switchMap(({ id }) => {
        return this.rolesService.getById(id).pipe(
          map((role: IRole) => {
            this.store.dispatch(releaseBackendErrors());
            return getRoleActionSuccess({ role });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getBackendErrors({ errors: errorResponse.error.errors }));
          })
        );
      })
    )
  );

  createRoles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createRoleAction),
      switchMap(({ role }) => {
        return this.rolesService.create(role).pipe(
          map((role: IRole) => {
            this.store.dispatch(releaseBackendErrors());
            return getRoleActionSuccess({ role });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getBackendErrors({ errors: errorResponse.error.errors }));
          })
        );
      })
    )
  );

  updateRoles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateRoleAction),
      switchMap(({ role }) => {
        return this.rolesService.update(role).pipe(
          map((role: IRole) => {
            this.store.dispatch(releaseBackendErrors());
            return getRoleActionSuccess({ role });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getBackendErrors({ errors: errorResponse.error.errors }));
          })
        );
      })
    )
  );

  deleteRoles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteRoleAction),
      switchMap(({ id }) => {
        return this.rolesService.delete(id).pipe(
          map((deleted: boolean) => {
            this.store.dispatch(releaseBackendErrors());
            return deleteRoleActionSuccess({ deleted });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getBackendErrors({ errors: errorResponse.error.errors }));
          })
        );
      })
    )
  );
}
