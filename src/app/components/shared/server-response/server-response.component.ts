import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectBackendErrors } from 'src/app/store/content/selectors/errors.selector';

@Component({
  selector: 'app-server-response',
  templateUrl: './server-response.component.html',
  styleUrls: ['./server-response.component.scss'],
})
export class ServerResponseComponent implements OnInit {
  errors$?: Observable<string[] | undefined>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.errors$ = this.store.pipe(select(selectBackendErrors));
  }
}
