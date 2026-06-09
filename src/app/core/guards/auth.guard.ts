import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Auth, authState } from '@angular/fire/auth';
import { map, take } from 'rxjs';


export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
    const auth = inject(Auth);
  const router = inject(Router);

  // Si hay usuario autenticado, permite navegar.
  // Si no hay sesion, redirige a /auth.
  return authState(auth).pipe(
    take(1),
    map(user => (user ? true : router.createUrlTree(['/auth'])))
  );
};