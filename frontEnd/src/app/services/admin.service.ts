import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../interfaces/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private httpClient = inject(HttpClient);
  private URL_ADMIN = "http://localhost:3000/admin";

  getAdmin(token: any){
    return this.httpClient.get(this.URL_ADMIN,token)
  }

  postAdmin(admin:Admin,token:any){
    return this.httpClient.post(this.URL_ADMIN,admin,token)
  }

  deleteAdmin(id:string,token:any){
    return this.httpClient.delete(`${this.URL_ADMIN}/${id}`,token)
  }

  
}
