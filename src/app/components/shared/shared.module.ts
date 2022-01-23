import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessagesComponent } from './error-messages/error-messages.component';
import { EffectsModule } from '@ngrx/effects';
import { DepsEffect } from 'src/app/store/content/effects/deps.effect';

@NgModule({
  declarations: [ErrorMessagesComponent],
  imports: [CommonModule, EffectsModule.forFeature([DepsEffect])],
  exports: [ErrorMessagesComponent],
})
export class SharedModule {}
