import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import {
  deletePositionAction,
  updatePositionAction,
} from 'src/app/store/content/actions/positions.action';
import { selectActivePosition } from 'src/app/store/content/selectors/positions.selector';
import { IPosition } from 'src/app/store/content/types/positions/Position.interface';

@Component({
  selector: 'app-edit-position',
  templateUrl: './edit-position.component.html',
  styleUrls: ['./edit-position.component.scss'],
})
export class EditPositionComponent implements OnInit {
  editPositionForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.store.pipe(select(selectActivePosition)).subscribe(
      (pos) =>
        (this.editPositionForm = this.fb.group({
          id: [pos?.id],
          idDep: [pos?.id],
          updated: [pos?.updated],
          title: [pos?.title, Validators.required],
          description: [pos?.description],
        }))
    );
  }

  onSavePosition(): void {
    const position: IPosition = {
      id: this.editPositionForm.value.id,
      idDep: this.editPositionForm.value.idDep,
      updated: this.editPositionForm.value.updated,
      title: this.editPositionForm.value.title,
      description: this.editPositionForm.value.description,
    };
    this.store.dispatch(updatePositionAction({ position }));
    this.router.navigate(['/department/' + this.editPositionForm.value.idDep]);
  }

  onDeletePosition(): void {
    console.log(
      'this.editPositionForm.value.id ',
      this.editPositionForm.value.id
    );
    this.store.dispatch(
      deletePositionAction({ id: this.editPositionForm.value.id })
    );
    this.router.navigate(['/departments']);
  }
}
