import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DepsService } from '../../services/deps.service';
import { PersistanceService } from 'src/app/shared/PersistanseService';
import { EffectsModule } from '@ngrx/effects';
import { DepsEffect } from 'src/app/store/content/effects/deps.effect';
import { ActivedepartmentformComponent } from './activedepartmentform/activedepartmentform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreatedepartmentformComponent } from './createdepartmentform/createdepartmentform.component';
import { SharedModule } from '../shared/shared.module';
import { DepartmentsListComponent } from './departments-list/departments-list.component';

const routes = [
  {
    path: 'departments',
    component: DepartmentsListComponent,
  },
  {
    path: 'department/:id',
    component: ActivedepartmentformComponent,
  },
  {
    path: 'department',
    component: CreatedepartmentformComponent,
  },
];

@NgModule({
  declarations: [
    ActivedepartmentformComponent,
    CreatedepartmentformComponent,
    DepartmentsListComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([DepsEffect]),
    SharedModule,
  ],
  providers: [DepsService, PersistanceService],
})
export class DepsModule {}
