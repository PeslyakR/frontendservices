import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { findRequestsAction } from 'src/app/store/content/actions/requests.action';
import {
  deleteServiceAction,
  findServiceAction,
  updateServiceAction,
} from 'src/app/store/content/actions/services.actions';
import { selectAllRequests } from 'src/app/store/content/selectors/requests.selectors';
import { selectActiveService } from 'src/app/store/content/selectors/services.selector';
import { IRequest } from 'src/app/store/content/types/requests/Request.interface';
import { IService } from 'src/app/store/content/types/services/Service.interface';

@Component({
  selector: 'app-active-service-form',
  templateUrl: './active-service-form.component.html',
  styleUrls: ['./active-service-form.component.scss'],
})
export class ActiveServiceFormComponent implements OnInit {
  form!: FormGroup;
  service$!: Observable<IService | undefined>;
  requests$!: Observable<IRequest[] | undefined>;
  formVisible: boolean = false;
  updated?: string;
  id!: number;
  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.id = this.route.snapshot.params['id'];
    this.store.dispatch(findServiceAction({ id: this.id }));
    this.store.dispatch(findRequestsAction({ id: this.id }));
    this.requests$ = this.store.pipe(select(selectAllRequests));
    this.form = this.fb.group({
      id: [''],
      title: ['', [Validators.required, Validators.maxLength(50)]],
      description: [''],
    });
  }

  ngOnInit(): void {
    this.service$ = this.store.pipe(select(selectActiveService));
  }
  onDelete(): void {
    this.store.dispatch(deleteServiceAction({ id: this.id }));
    this.router.navigate(['/response']);
  }
  editeService(): void {
    this.formVisible = !this.formVisible;
    this.service$.subscribe((serv) => {
      this.updated = serv?.updated;
      this.form = this.fb.group({
        id: [serv?.id],
        title: [serv?.title, Validators.required],
        description: [serv?.description],
      });
    });
  }
  onSavingEdit(): void {
    const service: IService = {
      id: this.form.value.id,
      title: this.form.value.title,
      description: this.form.value.description,
      updated: this.updated,
    };
    this.router.navigate(['/response']);
    this.store.dispatch(updateServiceAction({ service }));
  }
}
