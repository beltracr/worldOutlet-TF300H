import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../interfaces/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private httpClient = inject(HttpClient);
  private URL_ADMIN = "http://localhost:3000/admin";

  getAdmin(){
    return this.httpClient.get(this.URL_ADMIN)
  }

  postAdmin(admin:Admin){
    return this.httpClient.post(this.URL_ADMIN,admin)
  }

  deleteAdmin(id:string){
    return this.httpClient.delete(`${this.URL_ADMIN}/${id}`)
  }

  
}
