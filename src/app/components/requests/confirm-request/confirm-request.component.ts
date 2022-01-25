import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCurrentUser } from 'src/app/store/auth/selectors/selectors';
import { confirmRequestAction } from 'src/app/store/content/actions/requests.action';
import { findRolesAction } from 'src/app/store/content/actions/roles.actions';
import { getServicesActionSuccess } from 'src/app/store/content/actions/services.actions';
import { selectRequest } from 'src/app/store/content/selectors/requests.selectors';
import { selectAllRoles } from 'src/app/store/content/selectors/roles.selectors';
import { selectAllServices } from 'src/app/store/content/selectors/services.selector';
import { IConfirmRequest } from 'src/app/store/content/types/requests/ConfirmRequest.interface';
import { IRequest } from 'src/app/store/content/types/requests/Request.interface';
import { IRole } from 'src/app/store/content/types/roles/Role.interface';
import { IService } from 'src/app/store/content/types/services/Service.interface';

@Component({
  selector: 'app-confirm-request',
  templateUrl: './confirm-request.component.html',
  styleUrls: ['./confirm-request.component.scss'],
})
export class ConfirmRequestComponent implements OnInit {
  servicesVisible = false;
  confirmForm!: FormGroup;
  idActiveUser!: number;
  roles$!: Observable<IRole[] | undefined>;
  request$!: Observable<IRequest | undefined>;
  services$!: Observable<IService[] | undefined>;
  requestId!: number;
  statusList$ = [
    { title: 'Разрешено', value: 'CONFIRMED' },
    { title: 'Отказано', value: 'REJECTED' },
  ];
  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router
  ) {
    this.store
      .pipe(select(getCurrentUser))
      .subscribe((u) => (this.idActiveUser = u?.empId!));
    this.store.dispatch(findRolesAction({ idService: 1 }));
    this.roles$ = this.store.pipe(select(selectAllRoles));
    this.request$ = this.store.pipe(select(selectRequest));

    this.services$ = this.store.pipe(select(selectAllServices));
  }

  ngOnInit(): void {
    this.request$.subscribe((req) => {
      this.requestId = req?.id!;
      this.confirmForm = this.fb.group({
        services: [''],
        comment: [''],
        request: [this.statusList$[1]],
        roles: [req?.idRoles],
      });
    });
    this.confirmForm = this.fb.group({
      services: [''],
      comment: [''],
      request: [this.statusList$[1]],
      roles: [''],
    });
  }
  getService(idService: number): void {
    this.store.dispatch(findRolesAction({ idService }));

    this.roles$ = this.store.pipe(select(selectAllRoles));
  }
  onSubmit(): void {
    const confirmRequest: IConfirmRequest = {
      comment: this.confirmForm.value.comment,
      request: this.confirmForm.value.request.value,
      idAuthor: this.idActiveUser,
      idReq: this.requestId,
      idRoles: this.confirmForm.value.roles,
    };

    this.store.dispatch(confirmRequestAction({ confirmRequest }));
    this.router.navigate(['/response']);
  }
  showServices(): void {
    this.servicesVisible = !this.servicesVisible;
  }
}
