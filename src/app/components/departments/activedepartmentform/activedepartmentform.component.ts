import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  deleteDepAction,
  findDepAction,
  updateDepAction,
} from 'src/app/store/content/actions/departments.actions';
import { findPositionAction } from 'src/app/store/content/actions/positions.action';
import {
  gettingActiveDepartmentSelector,
  validationDepsErrorsSelector,
} from 'src/app/store/content/selectors/deps.selectors';
import { IDepartment } from 'src/app/store/content/types/departments/Department.interface';

@Component({
  selector: 'app-activedepartmentform',
  templateUrl: './activedepartmentform.component.html',
  styleUrls: ['./activedepartmentform.component.scss'],
})
export class ActivedepartmentformComponent implements OnInit {
  department$!: IDepartment | undefined;
  backendErrors$!: Observable<string[] | undefined>;
  form!: FormGroup;
  formVisible: boolean = false;
  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.store.dispatch(
      findDepAction({ id: this.route.snapshot.params['id'] })
    );

    this.form = this.fb.group({
      id: [''],
      title: ['', Validators.required],
      description: [''],
    });
  }

  ngOnInit(): void {
    this.store
      .pipe(select(gettingActiveDepartmentSelector))
      .subscribe((dep) => {
        console.log('next', dep);
        this.department$ = dep;
      });

    console.log('dep ', this.department$);
  }

  onDelete(): void {
    this.store.dispatch(
      deleteDepAction({ id: this.route.snapshot.params['id'] })
    );
    this.router.navigate(['/']);
  }

  editDepartment(): void {
    this.formVisible = !this.formVisible;
    if (this.department$) {
      this.form = this.fb.group({
        id: [this.department$.id || 0],
        title: [this.department$.title, [Validators.required]],
        description: [this.department$?.description],
      });
    }
  }
  onSavingEdit(): void {
    const department: IDepartment = {
      id: this.form.value.id,
      title: this.form.value.title,
      description: this.form.value.description,
      updated: this.department$?.updated,
    };
    this.store.dispatch(updateDepAction({ department }));

    this.backendErrors$ = this.store.pipe(select(validationDepsErrorsSelector));

    this.formVisible = !this.formVisible;
  }
  onEdit(id: number): void {
    this.store.dispatch(findPositionAction({ id }));
    this.router.navigate(['/editposition']);
  }
}
