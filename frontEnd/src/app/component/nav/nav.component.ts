import {Component, ViewChild} from '@angular/core';
import { RouterLink } from '@angular/router';
import { ModalIniSesionComponent } from '../modal-ini-sesion/modal-ini-sesion.component';
import {CartComponent} from "../cart/cart.component";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, ModalIniSesionComponent, CartComponent, NgClass],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  @ViewChild(CartComponent)
  cart!: CartComponent;

  openCart() {
    this.cart.openCart();
  }

  viewCart: boolean = false;
  constructor() {}

  ngOnInit(): void {
  }

  onToggleCart() {
    this.viewCart = !this.viewCart;
  }
}
