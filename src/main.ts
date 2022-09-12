import { APP_INITIALIZER, enableProdMode, importProvidersFrom } from '@angular/core';
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

fetch('assets/config/config.json')
.then((response) => response.json())
.then(config => {
  if (environment.production) {
    enableProdMode();
  }
  bootstrapApplication(AppComponent, {
    providers: [
      {
        provide: APP_INITIALIZER,
        multi: true,
        deps:[],
        useValue () {
          console.log("INIT")
        }
      },
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