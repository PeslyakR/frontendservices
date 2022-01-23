import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  findRequestAction,
  findRequestsAction,
} from 'src/app/store/content/actions/requests.action';
import { selectAllRequests } from 'src/app/store/content/selectors/requests.selectors';
import { IRequest } from 'src/app/store/content/types/requests/Request.interface';

@Component({
  selector: 'app-requests-list',
  templateUrl: './requests-list.component.html',
  styleUrls: ['./requests-list.component.scss'],
})
export class RequestsListComponent implements OnInit {
  requests$!: Observable<IRequest[] | undefined>;
  constructor(private store: Store, private route: ActivatedRoute) {
    this.store.dispatch(
      findRequestsAction({ id: this.route.snapshot.params['id'] })
    );
    this.requests$ = this.store.pipe(select(selectAllRequests));
  }

  ngOnInit(): void {}
  onSelectReques(id: number): void {
    this.store.dispatch(findRequestAction({ id }));
  }
}
