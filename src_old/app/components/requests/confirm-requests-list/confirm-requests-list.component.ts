import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCurrentUser } from 'src/app/store/auth/selectors/selectors';
import {
  findRequestAction,
  findRequestsForConfirmingAction,
} from 'src/app/store/content/actions/requests.action';
import { selectAllRequests } from 'src/app/store/content/selectors/requests.selectors';
import { IRequest } from 'src/app/store/content/types/requests/Request.interface';

@Component({
  selector: 'app-confirm-requests-list',
  templateUrl: './confirm-requests-list.component.html',
  styleUrls: ['./confirm-requests-list.component.scss'],
})
export class ConfirmRequestsListComponent implements OnInit {
  requests$!: Observable<IRequest[] | undefined>;
  idEmp!: number;
  constructor(private store: Store, private route: ActivatedRoute) {
    this.store
      .pipe(select(getCurrentUser))
      .subscribe((u) => (this.idEmp = u?.empId!));
    this.store.dispatch(
      findRequestsForConfirmingAction({
        idEmp: this.idEmp,
      })
    );
    this.requests$ = this.store.pipe(select(selectAllRequests));
  }

  ngOnInit(): void {}
  confirmRequest(id: number): void {
    this.store.dispatch(findRequestAction({ id }));
  }
}
