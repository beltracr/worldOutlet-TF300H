import {Component, ViewChild} from '@angular/core';
import { RouterLink } from '@angular/router';
import { ModalIniSesionComponent } from '../modal-ini-sesion/modal-ini-sesion.component';
import {CartComponent} from "../cart/cart.component";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [ RouterLink,ModalIniSesionComponent, CartComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  @ViewChild(CartComponent)
  cart!: CartComponent;

  openCart() {
    this.cart.openCart();
  }
}
