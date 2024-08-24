import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private httpClient = inject(HttpClient);
  private URL_PRODUCTS = "http://localhost:3000/products";

  getProducts(){
    return this.httpClient.get(this.URL_PRODUCTS)
  }

  postProducts(products:Products){
    return this.httpClient.post(this.URL_PRODUCTS,products)
  }

  deleteProducts(id:string){
    return this.httpClient.delete(`${this.URL_PRODUCTS}/${id}`)
  }

  updateProducts(productsUpdated:Products,id:string){
    return this.httpClient.put(`${this.URL_PRODUCTS}/${id}`,productsUpdated)
  }

  
}
