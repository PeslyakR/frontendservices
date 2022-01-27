import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { createUserAction } from 'src/app/store/content/actions/users.action';
import { IUser } from 'src/app/store/content/types/users/User.interface';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  createUserForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createUserForm = this.fb.group({
      username: ['', [Validators.required, Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.maxLength(50)]],
    });
  }
  onSubmit(): void {
    const user: IUser = {
      idEmployee: this.route.snapshot.params['idEmployee'],
      username: this.createUserForm.value.username,
      password: this.createUserForm.value.password,
    };
    this.store.dispatch(createUserAction({ user }));
    this.router.navigate(['/response']);
  }
}
