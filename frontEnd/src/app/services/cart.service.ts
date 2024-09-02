import { Injectable } from '@angular/core';
import {Products} from "../interfaces/products";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartProducts: Products[] = [];

  private _products: BehaviorSubject<Products[]>;

  constructor() {
    this._products = new BehaviorSubject<Products[]>([]);
  }

  get products() {
    return this._products.asObservable();
  }

  addToCart(product: Products){
    this.cartProducts.push(product);
    this._products.next(this.cartProducts);
  }

  deleteProduct(index:number){
    this.cartProducts.splice(index, 1);
    this._products.next(this.cartProducts);
  }
}

