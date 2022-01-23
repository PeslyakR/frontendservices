import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { PersistanceService } from 'src/app/shared/PersistanseService';
import { AuthEffect } from 'src/app/store/auth/effects/auth.effect';
import { LoginformComponent } from './loginform/loginform.component';
import { AuthService } from './services/auth.service';

const routes = [
  {
    path: 'login',
    component: LoginformComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    EffectsModule.forFeature([AuthEffect]),
  ],
  declarations: [LoginformComponent],
  providers: [AuthService, PersistanceService],
})
export class AuthModule {}
