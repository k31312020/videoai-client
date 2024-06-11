import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './services/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const isAuthenticated = inject(UserService).isAuthenticated()
  if (!isAuthenticated) {
    inject(Router).navigateByUrl("/login")
  }
  return isAuthenticated
};
