import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { RolesService } from 'src/app/services/roles.service';

import {
  createRoleAction,
  deleteRoleAction,
  deleteRoleActionSuccess,
  findRoleAction,
  findRolesAction,
  getRoleActionSuccess,
  getRolesActionFailure,
  getRolesActionSuccess,
  updateRoleAction,
} from '../actions/roles.actions';
import { IRole } from '../types/roles/Role.interface';

@Injectable()
export class RolesEffect {
  constructor(private actions$: Actions, private rolesService: RolesService) {}

  getAllRoles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(findRolesAction),
      switchMap(({ idService }) => {
        return this.rolesService.getAll(idService).pipe(
          map((roles: IRole[]) => {
            return getRolesActionSuccess({ roles });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              getRolesActionFailure({ errors: errorResponse.error.errors })
            );
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
            return getRoleActionSuccess({ role });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              getRolesActionFailure({ errors: errorResponse.error.errors })
            );
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
            return getRoleActionSuccess({ role });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              getRolesActionFailure({ errors: errorResponse.error.errors })
            );
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
            return getRoleActionSuccess({ role });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              getRolesActionFailure({ errors: errorResponse.error.errors })
            );
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
            return deleteRoleActionSuccess({ deleted });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              getRolesActionFailure({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    )
  );
}
