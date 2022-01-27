import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  deleteRoleAction,
  findRoleAction,
  updateRoleAction,
} from 'src/app/store/content/actions/roles.actions';
import { selectActiveRole } from 'src/app/store/content/selectors/roles.selectors';
import { IRole } from 'src/app/store/content/types/roles/Role.interface';

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.scss'],
})
export class EditRoleComponent implements OnInit {
  form!: FormGroup;
  id?: number;
  serviceId?: number;
  updated?: string;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.store.dispatch(
      findRoleAction({ id: this.route.snapshot.params['id'] })
    );
    this.store.pipe(select(selectActiveRole)).subscribe((role) => {
      this.id = role?.id;
      console.log('selector role ', role);

      this.serviceId = role?.serviceId;
      this.updated = role?.updated;
      this.form = this.fb.group({
        title: ['', [Validators.required, Validators.maxLength(50)]],
        name: ['', [Validators.required, Validators.maxLength(50)]],
        description: [role?.description],
      });
    });
  }

  onSubmit(): void {
    const role: IRole = {
      id: this.id,
      title: this.form.value.title,
      name: this.form.value.name,
      description: this.form.value.description,
      updated: this.form.value.updated,
      serviceId: this.serviceId,
    };

    this.store.dispatch(updateRoleAction({ role }));
    this.router.navigate(['/response']);
  }

  ngOnInit(): void {}

  onDelete(): void {
    this.store.dispatch(
      deleteRoleAction({ id: this.route.snapshot.params['id'] })
    );
    this.router.navigate(['/response']);
  }
}
