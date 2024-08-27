import { Component } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  isCartVisible = false;

  openCart() {
    this.isCartVisible = true;
  }

  closeCart() {
    this.isCartVisible = false;
  }

  checkout() {
    // Lógica para finalizar la compra
  }
}
