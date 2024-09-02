import { Component } from '@angular/core';
import {NgClass, NgIf} from "@angular/common";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgIf, NgClass],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  isOpen = false;

  openCart(): void {
    this.isOpen = true;
  }

  closeCart(): void {
    this.isOpen = false;
  }
}
