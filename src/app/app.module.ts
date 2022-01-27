import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepsModule } from './components/departments/deps.module';
import { EmployeesModule } from './components/employees/employees.module';
import { AuthModule } from './components/login/auth.module';
import { PositionsModule } from './components/positions/positions.module';
import { RequestsModule } from './components/requests/requests.module';
import { RolesModule } from './components/roles/roles.module';
import { ServicesModule } from './components/services/services.module';
import { UsersModule } from './components/users/users.module';
import { reducers } from './store/content/reducers/reducers';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    DepsModule,
    RolesModule,
    PositionsModule,
    ServicesModule,
    EmployeesModule,
    RequestsModule,
    UsersModule,
    StoreModule.forRoot({ content: reducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
