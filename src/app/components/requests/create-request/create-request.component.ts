import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { createRequestAction } from 'src/app/store/content/actions/requests.action';
import { findServicesAction } from 'src/app/store/content/actions/services.actions';
import { gettingActiveEmployeeSelector } from 'src/app/store/content/selectors/employee.selector';
import { selectAllServices } from 'src/app/store/content/selectors/services.selector';
import { IEmployee } from 'src/app/store/content/types/employees/Employee.interface';
import { IRequest } from 'src/app/store/content/types/requests/Request.interface';
import { IService } from 'src/app/store/content/types/services/Service.interface';

@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.scss'],
})
export class CreateRequestComponent implements OnInit {
  requestForm!: FormGroup;
  employee$!: Observable<IEmployee | undefined>;
  services$!: Observable<IService[] | undefined>;
  serviceId!: number;

  constructor(private fb: FormBuilder, private store: Store) {
    this.requestForm = this.fb.group({
      header: ['', Validators.required],
      body: ['', Validators.required],
    });
    console.log('create request constructor');
  }

  ngOnInit(): void {
    console.log('create request ngOnInit');
    this.employee$ = this.store.pipe(select(gettingActiveEmployeeSelector));
    this.store.dispatch(findServicesAction());
    this.services$ = this.store.pipe(select(selectAllServices));
  }
  onSaveRequest(): void {
    console.log('create request onSubmit');

    this.employee$.subscribe((e) => {
      const request: IRequest = {
        idService: this.serviceId,
        header: this.requestForm.value.header,
        body: this.requestForm.value.body,
        idAuthor: e!.id!,
      };
      this.store.dispatch(createRequestAction({ request }));
    });
  }
}
