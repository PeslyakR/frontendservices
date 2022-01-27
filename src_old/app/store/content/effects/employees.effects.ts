import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { EmployeesService } from '../../../services/employees.service';
import {
  createEmployeeAction,
  deleteEmployeeAction,
  deleteEmployeeActionSuccess,
  findEmployeeAction,
  findEmployeesAction,
  getEmployeeActionFailure,
  getEmployeeActionSuccess,
  getEmployeesActionSuccess,
  updateEmployeeAction,
} from '../actions/employees.action';
import { IEmployee } from '../types/employees/Employee.interface';

@Injectable()
export class EmployeeEffect {
  constructor(
    private actions$: Actions,
    private employeesService: EmployeesService
  ) {}

  getAllEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(findEmployeesAction),
      switchMap(() => {
        return this.employeesService.getAll().pipe(
          map((employees: IEmployee[]) => {
            return getEmployeesActionSuccess({ employees });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              getEmployeeActionFailure({ errors: errorResponse.error.errors })
            );
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
            return getEmployeeActionSuccess({ employee });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              getEmployeeActionFailure({ errors: errorResponse.error.errors })
            );
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
            return getEmployeeActionSuccess({ employee });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              getEmployeeActionFailure({ errors: errorResponse.error.errors })
            );
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
            return getEmployeeActionSuccess({ employee });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              getEmployeeActionFailure({ errors: errorResponse.error.errors })
            );
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
            return deleteEmployeeActionSuccess({ deleted });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              getEmployeeActionFailure({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    )
  );
}
