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

  constructor() { }
}
