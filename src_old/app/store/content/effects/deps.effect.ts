import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { DepsService } from 'src/app/services/deps.service';

import {
  findDepsAction,
  findDepAction,
  createDepAction,
  getDepActionSuccess,
  getDepsActionSuccess,
  getDepActionFailure,
  deleteDepartmentActionSuccess,
  deleteDepAction,
  updateDepAction,
} from '../actions/departments.actions';
import { IDepartment } from '../types/departments/Department.interface';

@Injectable()
export class DepsEffect {
  constructor(private actions$: Actions, private depsService: DepsService) {}

  getAllDeps$ = createEffect(() =>
    this.actions$.pipe(
      ofType(findDepsAction),
      switchMap(() => {
        return this.depsService.getAll().pipe(
          map((departments: IDepartment[]) => {
            return getDepsActionSuccess({ departments });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              getDepActionFailure({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    )
  );

  getDepById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(findDepAction),
      switchMap(({ id }) => {
        return this.depsService.getById(id).pipe(
          map((department: IDepartment) => {
            return getDepActionSuccess({ department });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              getDepActionFailure({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    )
  );

  createDep$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createDepAction),
      switchMap(({ department }) => {
        return this.depsService.create(department).pipe(
          map((department: IDepartment) => {
            return getDepActionSuccess({ department });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              getDepActionFailure({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    )
  );

  updateDep$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateDepAction),
      switchMap(({ department }) => {
        return this.depsService.update(department).pipe(
          map((department: IDepartment) => {
            return getDepActionSuccess({ department });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              getDepActionFailure({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    )
  );

  deleteDep$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteDepAction),
      switchMap(({ id }) => {
        return this.depsService.delete(id).pipe(
          map((deleted: boolean) => {
            return deleteDepartmentActionSuccess({ deleted });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              getDepActionFailure({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    )
  );
}
