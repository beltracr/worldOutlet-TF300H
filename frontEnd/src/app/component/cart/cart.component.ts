import { Component } from '@angular/core';
import {NgIf} from "@angular/common";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgIf],
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
