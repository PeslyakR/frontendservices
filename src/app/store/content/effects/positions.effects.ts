import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { PositionsService } from 'src/app/services/positions.service';
import {
  createPositionAction,
  deletePositionActionSuccess,
  findPositionAction,
  findPositionsAction,
  getPositionActionSuccess,
  getPositionsActionSuccess,
  updatePositionAction,
  deletePositionAction,
  getPostitionsActionFailure,
} from '../actions/positions.action';
import { IPosition } from '../types/positions/Position.interface';

@Injectable()
export class PositionsEffect {
  constructor(
    private actions$: Actions,
    private postionService: PositionsService
  ) {}

  getAllPositions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(findPositionsAction),
      switchMap(({ idDep }) => {
        return this.postionService.getAll(idDep).pipe(
          map((positions: IPosition[]) => {
            return getPositionsActionSuccess({ positions });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              getPostitionsActionFailure({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    )
  );

  getByIdPositions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(findPositionAction),
      switchMap(({ id }) => {
        return this.postionService.getById(id).pipe(
          map((position: IPosition) => {
            return getPositionActionSuccess({ position });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              getPostitionsActionFailure({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    )
  );

  createPositionAction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createPositionAction),
      switchMap(({ position }) => {
        return this.postionService.create(position).pipe(
          map((position: IPosition) => {
            return getPositionActionSuccess({ position });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              getPostitionsActionFailure({
                errors: errorResponse.error.errors,
              })
            );
          })
        );
      })
    )
  );

  updatePositionAction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updatePositionAction),
      switchMap(({ position }) => {
        return this.postionService.update(position).pipe(
          map((position: IPosition) => {
            return getPositionActionSuccess({ position });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              getPostitionsActionFailure({
                errors: errorResponse.error.errors,
              })
            );
          })
        );
      })
    )
  );

  deletePositionAction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deletePositionAction),
      switchMap(({ id }) => {
        return this.postionService.delete(id).pipe(
          map((deleted: boolean) => {
            return deletePositionActionSuccess({ deleted });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              getPostitionsActionFailure({
                errors: errorResponse.error.errors,
              })
            );
          })
        );
      })
    )
  );
}
