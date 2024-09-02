import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private httpClient = inject(HttpClient);
  private URL_USERS = "http://localhost:3000/user";

  getUsers(token:any){
    return this.httpClient.get(this.URL_USERS,token)
  }

  postUsers(user:Users){
    return this.httpClient.post(this.URL_USERS,user)
  }

  deleteById(id:string,token:any){
    return this.httpClient.delete(`${this.URL_USERS}/${id}`,token);
  }

  
}
