import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { RequestsService } from '../../services/requests.service';
import { PersistanceService } from 'src/app/shared/PersistanseService';
import { RequestsEffect } from 'src/app/store/content/effects/requests.effect';
import { CreateRequestComponent } from './create-request/create-request.component';
import { ConfirmRequestComponent } from './confirm-request/confirm-request.component';
import { EditRequestComponent } from './edit-request/edit-request.component';
import { RequestsListComponent } from './requests-list/requests-list.component';
import { ConfirmRequestsListComponent } from './confirm-requests-list/confirm-requests-list.component';

const routes = [
  {
    path: 'addrequest',
    component: CreateRequestComponent,
  },
  {
    path: 'request',
    component: EditRequestComponent,
  },
  {
    path: 'confirm',
    component: ConfirmRequestComponent,
  },
  {
    path: 'requests/:id',
    component: RequestsListComponent,
  },
  {
    path: 'confirmslist',
    component: ConfirmRequestsListComponent,
  },
];

@NgModule({
  declarations: [
    CreateRequestComponent,
    ConfirmRequestComponent,
    EditRequestComponent,
    RequestsListComponent,
    ConfirmRequestsListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([RequestsEffect]),
  ],
  providers: [RequestsService, PersistanceService],
})
export class RequestsModule {}
