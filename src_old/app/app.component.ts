import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isAuthorized } from './store/auth/selectors/selectors';
import { findDepsAction } from './store/content/actions/departments.actions';
import { findServicesAction } from './store/content/actions/services.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isAuthorized: Observable<boolean>;
  title = 'frontendservices';
  constructor(private store: Store, private router: Router) {
    this.store.dispatch(findServicesAction());
    this.store.dispatch(findDepsAction());
    this.isAuthorized = this.store.pipe(select(isAuthorized));
    this.router.navigate(['/login']);
  }
}
