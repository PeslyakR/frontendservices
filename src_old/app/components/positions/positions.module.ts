import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { PositionsEffect } from 'src/app/store/content/effects/positions.effects';
import { PositionsService } from '../../services/positions.service';
import { PersistanceService } from 'src/app/shared/PersistanseService';
import { DepsEffect } from 'src/app/store/content/effects/deps.effect';
import { CreatePositionComponent } from './create-position/create-position.component';
import { EditPositionComponent } from './edit-position/edit-position.component';

const routes = [
  {
    path: 'position',
    component: CreatePositionComponent,
  },
  {
    path: 'editposition',
    component: EditPositionComponent,
  },
];

@NgModule({
  declarations: [CreatePositionComponent, EditPositionComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([PositionsEffect, DepsEffect]),
  ],
  providers: [PositionsService, PersistanceService],
})
export class PositionsModule {}
