import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { createRoleAction } from 'src/app/store/content/actions/roles.actions';
import { IRole } from 'src/app/store/content/types/roles/Role.interface';
import { IBackendErrors } from 'src/app/store/sharedtypes/BackendErrors.interface';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.scss'],
})
export class CreateRoleComponent implements OnInit {
  form!: FormGroup;
  backendErrors$!: Observable<IBackendErrors | undefined>;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required, Validators.maxLength(50)],
      name: ['', Validators.required, Validators.maxLength(50)],
      description: [''],
    });
  }

  ngOnInit(): void {}
  onSubmit(): void {
    const role: IRole = {
      serviceId: this.route.snapshot.params['serviceId'],
      name: this.form.value.name,
      title: this.form.value.title,
      description: this.form.value.description,
    };
    this.store.dispatch(createRoleAction({ role }));
    this.router.navigate(['/response']);
  }
}
