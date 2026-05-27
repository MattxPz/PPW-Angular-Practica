import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { provideHttpClient } from '@angular/common/http';

// Firebase
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

// Importas el objeto que acabamos de crear
import { environment } from '../environments/environment';

const firebase = {
    apiKey: "AIzaSyDTnjw9_xepjp1B186PLknmy9zsZtepI1w",
    authDomain: "ppw-practicaangular.firebaseapp.com",
    projectId: "ppw-practicaangular",
    storageBucket: "ppw-practicaangular.firebasestorage.app",
    messagingSenderId: "428754213972",
    appId: "1:428754213972:web:b5f11837efab7c65db21c1",
    measurementId: "G-PDE24YKRCR"
  }

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    provideHttpClient(),

    // Usas la referencia del environment
    provideFirebaseApp(() => initializeApp(firebase)),

    provideAuth(() => getAuth()),

    provideFirestore(() => getFirestore()),
  ]
};