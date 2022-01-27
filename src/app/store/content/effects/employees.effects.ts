import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap } from 'rxjs';
import { EmployeesService } from '../../../services/employees.service';
import {
  createEmployeeAction,
  deleteEmployeeAction,
  deleteEmployeeActionSuccess,
  findEmployeeAction,
  findEmployeesAction,
  getEmployeeActionSuccess,
  getEmployeesActionSuccess,
  updateEmployeeAction,
} from '../actions/employees.action';
import {
  getBackendErrors,
  releaseBackendErrors,
} from '../actions/errors.action';
import { IEmployee } from '../types/employees/Employee.interface';

@Injectable()
export class EmployeeEffect {
  constructor(
    private actions$: Actions,
    private employeesService: EmployeesService,
    private store: Store
  ) {}

  getAllEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(findEmployeesAction),
      switchMap(() => {
        return this.employeesService.getAll().pipe(
          map((employees: IEmployee[]) => {
            this.store.dispatch(releaseBackendErrors());
            return getEmployeesActionSuccess({ employees });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getBackendErrors({ errors: errorResponse.error.errors }));
          })
        );
      })
    )
  );

  getByIdEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(findEmployeeAction),
      switchMap(({ id }) => {
        return this.employeesService.getById(id).pipe(
          map((employee: IEmployee) => {
            this.store.dispatch(releaseBackendErrors());
            return getEmployeeActionSuccess({ employee });
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
      ofType(createEmployeeAction),
      switchMap(({ employee }) => {
        return this.employeesService.create(employee).pipe(
          map((employee: IEmployee) => {
            this.store.dispatch(releaseBackendErrors());
            return getEmployeeActionSuccess({ employee });
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
      ofType(updateEmployeeAction),
      switchMap(({ employee }) => {
        return this.employeesService.update(employee).pipe(
          map((employee: IEmployee) => {
            this.store.dispatch(releaseBackendErrors());
            return getEmployeeActionSuccess({ employee });
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
      ofType(deleteEmployeeAction),
      switchMap(({ id }) => {
        return this.employeesService.delete(id).pipe(
          map((deleted: boolean) => {
            this.store.dispatch(releaseBackendErrors());
            return deleteEmployeeActionSuccess({ deleted });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getBackendErrors({ errors: errorResponse.error.errors }));
          })
        );
      })
    )
  );
}
