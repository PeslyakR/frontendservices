import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffect } from 'src/app/store/content/effects/users.effects';
import { UsersService } from 'src/app/services/users.service';
import { PersistanceService } from 'src/app/shared/PersistanseService';

const routes = [
  {
    path: 'newuser/:idEmployee',
    component: CreateUserComponent,
  },
];

@NgModule({
  declarations: [CreateUserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([UsersEffect]),
  ],
  providers: [UsersService, PersistanceService],
})
export class UsersModule {}
