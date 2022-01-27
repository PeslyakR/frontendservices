import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessagesComponent } from './error-messages/error-messages.component';
import { EffectsModule } from '@ngrx/effects';
import { DepsEffect } from 'src/app/store/content/effects/deps.effect';
import { ServerResponseComponent } from './server-response/server-response.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: 'response',
    component: ServerResponseComponent,
  },
];

@NgModule({
  declarations: [ErrorMessagesComponent, ServerResponseComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([DepsEffect]),
  ],
  exports: [ErrorMessagesComponent],
})
export class SharedModule {}
