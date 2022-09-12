import { APP_INITIALIZER, createEnvironmentInjector, enableProdMode, ENVIRONMENT_INITIALIZER, importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

import { StoreModule } from '@ngrx/store'
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AuthModule } from '@auth0/auth0-angular'
import { environment } from './environments/environment';



if (environment.production) {
  enableProdMode();
}

fetch('assets/config/config.json')
.then((response) => response.json())
.then(config => {
  bootstrapApplication(AppComponent, {
    providers: [

      HttpClientModule,
      importProvidersFrom(
        AuthModule.forRoot({
          domain: config.auth.domain,
          clientId: config.auth.clientId
        }),
        RouterModule.forRoot(routes),
        StoreModule.forRoot({
          router: routerReducer
        }),
        StoreRouterConnectingModule.forRoot(),
        StoreDevtoolsModule.instrument()
      )
      
    ]
  })


})