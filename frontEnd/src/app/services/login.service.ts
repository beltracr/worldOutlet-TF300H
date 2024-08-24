import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { jwtDecode } from 'jwt-decode';
import { Credentials } from '../interfaces/credentials';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private httpClient = inject(HttpClient);
  private router = inject(Router);
  public toastrService = inject(ToastrService);
  private API_URL = 'http://localhost:3000/login';

  login(credenciales: Credentials) {
    return this.httpClient.post(this.API_URL, credenciales)
  }



  getToken() {
    return localStorage.getItem('token');
  }

  isAdmin() {
    const token = this.getToken();
    if (token) {
      const decoded: any = jwtDecode(token);
      return decoded.isAdmin || false;
    } else {
      console.error('No se encontró token');
      return false;
    }
  }

  redirect() {
    if (this.isAdmin()) {
      window.location.href = '/admin';
    } else {
      window.location.href = '/';
    }
  }

  isLogged() {
    return this.getToken() ? true : false;
  }


  logout() {
    this.toastrService.info('sesion finalizada con exito');
    localStorage.removeItem('token');
    this.router.navigate(['/'])
  }




}







