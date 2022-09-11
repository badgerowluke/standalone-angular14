import { enableProdMode, importProvidersFrom } from '@angular/core';
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


bootstrapApplication(AppComponent, {
  providers: [
    HttpClientModule,
    importProvidersFrom(
      AuthModule.forRoot({
        domain: 'brgs.auth0.com',
        clientId: ''
      }),
      RouterModule.forRoot(routes),
      StoreModule.forRoot({
          router: routerReducer
      }),
      StoreRouterConnectingModule.forRoot(),
      StoreDevtoolsModule.instrument()
    ),
    
  ]
})