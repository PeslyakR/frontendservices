import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { createEmployeeAction } from 'src/app/store/content/actions/employees.action';
import { IEmployee } from 'src/app/store/content/types/employees/Employee.interface';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss'],
})
export class CreateEmployeeComponent implements OnInit {
  form!: FormGroup;
  positionId!: number;
  id?: number;
  updated?: string;
  constructor(
    private fb: FormBuilder,
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      fullName: ['', Validators.required],
      address: [''],
      beginWorking: [],
    });
  }

  onSubmit(): void {
    const employee: IEmployee = {
      positionId: this.route.snapshot.params['id'],
      fullName: this.form.value.fullName,
      address: this.form.value.address,
      beginWorking: this.form.value.beginWorking,
    };
    this.store.dispatch(createEmployeeAction({ employee }));
    this.router.navigate(['/response']);
  }
}
