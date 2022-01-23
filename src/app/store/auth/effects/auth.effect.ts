import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { AuthService } from 'src/app/components/login/services/auth.service';
import { ICurrentUser } from 'src/app/components/login/types/CurrentUser.interface';
import { PersistanceService } from 'src/app/shared/PersistanseService';
import {
  authAction,
  authFailureAction,
  authSuccessAction,
} from '../actions/auth.actions';

@Injectable()
export class AuthEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanseService: PersistanceService
  ) {}

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authAction),
      switchMap(({ request }) => {
        return this.authService.login(request).pipe(
          map((currentUser: ICurrentUser) => {
            this.persistanseService.set(
              'accessToken',
              'Bearer_' + currentUser.access_token
            );
            return authSuccessAction({ currentUser });
          }),
          catchError((errorResponce: HttpErrorResponse) => {
            return of(
              authFailureAction({ errors: errorResponce.error.errors })
            );
          })
        );
      })
    )
  );
}
