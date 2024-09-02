import { CanActivateFn } from '@angular/router';
import { LoginService } from '../services/login.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const loginService = inject(LoginService);

  if(!loginService.isLogged()){
     router.navigate(["inicio"]);
    
     return false
     
  }

  if(!loginService.isAdmin()){router.navigate(["inicio"]);
    return false}





  return true;
};
