import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { EmployeesService } from '../../services/employees.service';
import { PersistanceService } from 'src/app/shared/PersistanseService';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { ActiveEmployeeComponent } from './active-employee/active-employee.component';
import { EmployeeEffect } from 'src/app/store/content/effects/employees.effects';

const routes = [
  {
    path: 'employee/:id',
    component: CreateEmployeeComponent,
  },
  {
    path: 'employee/:idDep/:id',
    component: ActiveEmployeeComponent,
  },
];

@NgModule({
  declarations: [CreateEmployeeComponent, ActiveEmployeeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([EmployeeEffect]),
  ],
  providers: [EmployeesService, PersistanceService],
})
export class EmployeesModule {}
