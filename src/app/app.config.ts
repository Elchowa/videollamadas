import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp } from "firebase/app";
// 👇 Firebase modular
import { provideFirebaseApp, } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD6Vpc1KW0HG3trRkZLsrpNA2AWKCX6itI",
  authDomain: "autenticacion-9c85e.firebaseapp.com",
  projectId: "autenticacion-9c85e",
  storageBucket: "autenticacion-9c85e.firebasestorage.app",
  messagingSenderId: "788000033525",
  appId: "1:788000033525:web:5cc3471e258484330f13bc"
};
export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideRouter(routes),
    provideAnimationsAsync(),

    // ✅ Firebase inicializado correctamente con versión modular
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()), // opcional, solo si usas Firestore
  ]
};
