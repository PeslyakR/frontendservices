import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { findDepsAction } from 'src/app/store/content/actions/departments.actions';
import { gettingDepartmentsSelector } from 'src/app/store/content/selectors/deps.selectors';
import { IDepartment } from 'src/app/store/content/types/departments/Department.interface';

@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.scss'],
})
export class DepartmentsListComponent implements OnInit {
  depatments$!: Observable<IDepartment[]>;

  constructor(private store: Store) {
    this.store.dispatch(findDepsAction());
  }

  ngOnInit(): void {
    this.depatments$ = this.store.pipe(select(gettingDepartmentsSelector));
  }
}
