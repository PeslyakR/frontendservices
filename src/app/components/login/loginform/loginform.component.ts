import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { authAction } from 'src/app/store/auth/actions/auth.actions';

import {
  isAuthorized,
  validationErrorsSelector,
} from 'src/app/store/auth/selectors/selectors';
import { IBackendErrors } from 'src/app/store/content/types/errors/BackendErrors.interface';
import { ILoginData } from '../types/LoginData.interface';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss'],
})
export class LoginformComponent implements OnInit {
  form: FormGroup;
  isSubmitting$!: Observable<boolean>;
  backendErrors$!: Observable<IBackendErrors | null>;
  canLogin$!: Observable<boolean>;

  constructor(private fb: FormBuilder, private store: Store) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.canLogin$ = this.store.pipe(select(isAuthorized));

    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  onSubmit(): void {
    const request: ILoginData = {
      password: this.form.value.password,
      username: this.form.value.username,
    };

    this.store.dispatch(authAction({ request }));
  }
}
