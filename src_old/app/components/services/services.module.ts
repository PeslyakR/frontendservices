import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { ServicesEffect } from 'src/app/store/content/effects/services.effects';
import { ServicesService } from '../../services/services.service';
import { PersistanceService } from 'src/app/shared/PersistanseService';
import { ActiveServiceFormComponent } from './active-service-form/active-service-form.component';
import { ServicesListComponent } from './services-list/services-list.component';
import { SharedModule } from '../shared/shared.module';
import { CreateServiceComponent } from './create-service/create-service.component';

const routes = [
  {
    path: 'services',
    component: ServicesListComponent,
  },
  {
    path: 'service/:id',
    component: ActiveServiceFormComponent,
  },
  {
    path: 'service',
    component: CreateServiceComponent,
  },
];

@NgModule({
  declarations: [
    ActiveServiceFormComponent,
    ServicesListComponent,
    CreateServiceComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    //StoreModule.forFeature('services', serviceReducers),
    EffectsModule.forFeature([ServicesEffect]),
    SharedModule,
  ],
  providers: [ServicesService, PersistanceService],
})
export class ServicesModule {}
