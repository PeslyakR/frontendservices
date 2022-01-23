import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { findServicesAction } from 'src/app/store/content/actions/services.actions';
import { selectAllServices } from 'src/app/store/content/selectors/services.selector';
import { IService } from 'src/app/store/content/types/services/Service.interface';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss'],
})
export class ServicesListComponent implements OnInit {
  servicesList$!: Observable<IService[]>;

  constructor(private store: Store) {
    this.store.dispatch(findServicesAction());
  }

  ngOnInit(): void {
    this.servicesList$ = this.store.pipe(select(selectAllServices));
  }
}
