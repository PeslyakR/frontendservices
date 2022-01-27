import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { createServiceAction } from 'src/app/store/content/actions/services.actions';
import { IService } from 'src/app/store/content/types/services/Service.interface';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.scss'],
})
export class CreateServiceComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router
  ) {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      description: [''],
    });
  }

  ngOnInit(): void {}
  onSubmit(): void {
    const service: IService = {
      title: this.form.value.title,
      description: this.form.value.description,
    };
    this.store.dispatch(createServiceAction({ service }));
    this.router.navigate(['/response']);
  }
}
