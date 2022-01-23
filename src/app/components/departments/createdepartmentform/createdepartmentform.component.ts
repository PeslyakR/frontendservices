import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { createDepAction } from 'src/app/store/content/actions/departments.actions';
import { IDepartment } from 'src/app/store/content/types/departments/Department.interface';
import { IBackendErrors } from 'src/app/store/sharedtypes/BackendErrors.interface';

@Component({
  selector: 'app-createdepartmentform',
  templateUrl: './createdepartmentform.component.html',
  styleUrls: ['./createdepartmentform.component.scss'],
})
export class CreatedepartmentformComponent implements OnInit {
  form!: FormGroup;
  backendErrors$!: Observable<IBackendErrors | undefined>;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: [''],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const department: IDepartment = {
      title: this.form.value.title,
      description: this.form.value.description,
    };
    this.store.dispatch(createDepAction({ department }));

    this.router.navigate(['/']);
  }
}
