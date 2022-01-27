import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { createPositionAction } from 'src/app/store/content/actions/positions.action';
import { gettingActiveDepartmentSelector } from 'src/app/store/content/selectors/deps.selectors';
import { IDepartment } from 'src/app/store/content/types/departments/Department.interface';
import { IPosition } from 'src/app/store/content/types/positions/Position.interface';

@Component({
  selector: 'app-create-position',
  templateUrl: './create-position.component.html',
  styleUrls: ['./create-position.component.scss'],
})
export class CreatePositionComponent implements OnInit {
  form: FormGroup;
  activeDepartment!: IDepartment | undefined;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required, Validators.maxLength(50)],
      description: [''],
    });
  }

  ngOnInit(): void {}
  onSubmit(): void {
    this.store
      .pipe(select(gettingActiveDepartmentSelector))
      .subscribe((dep) => (this.activeDepartment = dep));
    const position: IPosition = {
      title: this.form.value.title,
      description: this.form.value.description,
      idDep: this.activeDepartment?.id,
    };

    this.store.dispatch(createPositionAction({ position }));
    this.router.navigate(['/response']);
  }
}
