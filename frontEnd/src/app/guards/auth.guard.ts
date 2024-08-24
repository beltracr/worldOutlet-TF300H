import { CanActivateFn } from '@angular/router';
import { LoginService } from '../services/login.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const loginService = inject(LoginService);

  if(!loginService.isLogged()){
     router.navigate(["/"]);
     return false
  }

  if(!loginService.isAdmin()){router.navigate(["/"]);
    return false}





  return true;
};
