import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestsModule } from '../requests/requests.module';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { RolesEffect } from 'src/app/store/content/effects/roles.effects';
import { RolesService } from '../../services/roles.service';
import { PersistanceService } from 'src/app/shared/PersistanseService';
import { CreateRoleComponent } from './create-role/create-role.component';
import { EditRoleComponent } from './edit-role/edit-role.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes = [
  {
    path: 'role/:serviceId',
    component: CreateRoleComponent,
  },
  {
    path: 'role/:serviceId/:id',
    component: EditRoleComponent,
  },
];

@NgModule({
  declarations: [CreateRoleComponent, EditRoleComponent],
  imports: [
    CommonModule,
    RequestsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([RolesEffect]),
  ],
  providers: [RolesService, PersistanceService],
})
export class RolesModule {}
