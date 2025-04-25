import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

import { initializeApp } from 'firebase/app';

initializeApp({
  apiKey: "AIzaSyD6Vpc1KW0HG3trRkZLsrpNA2AWKCX6itI",
  authDomain: "autenticacion-9c85e.firebaseapp.com",
  projectId: "autenticacion-9c85e",
  storageBucket: "autenticacion-9c85e.firebasestorage.app",
  messagingSenderId: "788000033525",
  appId: "1:788000033525:web:5cc3471e258484330f13bc"
});

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});
