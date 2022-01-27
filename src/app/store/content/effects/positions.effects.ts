import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap } from 'rxjs';
import { PositionsService } from 'src/app/services/positions.service';
import {
  getBackendErrors,
  releaseBackendErrors,
} from '../actions/errors.action';
import {
  createPositionAction,
  deletePositionActionSuccess,
  findPositionAction,
  findPositionsAction,
  getPositionActionSuccess,
  getPositionsActionSuccess,
  updatePositionAction,
  deletePositionAction,
} from '../actions/positions.action';
import { IPosition } from '../types/positions/Position.interface';

@Injectable()
export class PositionsEffect {
  constructor(
    private actions$: Actions,
    private postionService: PositionsService,
    private store: Store
  ) {}

  getAllPositions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(findPositionsAction),
      switchMap(({ idDep }) => {
        return this.postionService.getAll(idDep).pipe(
          map((positions: IPosition[]) => {
            this.store.dispatch(releaseBackendErrors());
            return getPositionsActionSuccess({ positions });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getBackendErrors({ errors: errorResponse.error.errors }));
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
            this.store.dispatch(releaseBackendErrors());
            return getPositionActionSuccess({ position });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getBackendErrors({ errors: errorResponse.error.errors }));
          })
        );
      })
    )
  );

  createPositionAction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createPositionAction),
      switchMap(({ position }) => {
        this.store.dispatch(releaseBackendErrors());
        return this.postionService.create(position).pipe(
          map((position: IPosition) => {
            return getPositionActionSuccess({ position });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              getBackendErrors({
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
            this.store.dispatch(releaseBackendErrors());
            return getPositionActionSuccess({ position });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              getBackendErrors({
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
            this.store.dispatch(releaseBackendErrors());
            return deletePositionActionSuccess({ deleted });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              getBackendErrors({
                errors: errorResponse.error.errors,
              })
            );
          })
        );
      })
    )
  );
}
